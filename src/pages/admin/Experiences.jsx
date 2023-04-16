import { Button, Form, Input, Modal, Select, Table } from "antd";
import React, { useState } from "react";
import { deleteData, getData, putData, sendData } from "../../server/common";
import { USER_ROLES } from "../../const";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { toast } from "react-toastify";
import { FaUserEdit } from "react-icons/fa";
import { AiOutlineUserDelete, AiOutlineUserAdd } from "react-icons/ai";
import { ROLE, USER_ID } from "../../utils";
import { useFetch } from "../../hook";

const { confirm } = Modal;

const Experiences = () => {
  const columns = [
    {
      title: "Work Name",
      dataIndex: "workName",
      key: "workName",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Start Date",
      dataIndex: `startDate`,
      key: "startDate",
      render: (startDate) => {
        startDate = startDate.split("T");
        return startDate[0];
      },
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
      render: (endDate) => {
        endDate = endDate.split("T");
        return endDate[0];
      },
    },
    {
      title: "Actions",
      width: 200,
      render: ({ _id }) => (
        <>
          <Button type="primary">
            <FaUserEdit />
          </Button>
          <Button type="primary" danger>
            <AiOutlineUserDelete />
          </Button>
        </>
      ),
    },
  ];
  const [form] = Form.useForm();
  const {
    data: experiences,
    loading,
    recall: getExperiences,
  } = useFetch(`experiences${ROLE === "client" ? `?user[in]=${USER_ID}` : ""}`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      delete values.confirm;
      if (selected) {
        values.password || delete values.password;
        putData(`users/${selected}`, values).then((data) => {
          getExperiences();
          setIsModalOpen(false);
        });
      } else {
        sendData("users", values).then((res) => {
          getExperiences();
          setIsModalOpen(false);
        });
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openFormModal = () => {
    showModal();
    setSelected(null);
    form.resetFields();
  };

  function editUser(id) {
    showModal();
    setSelected(id);
    getData(`users/${id}`).then((res) => {
      console.log(res);
      form.setFieldsValue(res.data);
    });
  }

  function deleteUser(id) {
    console.log(id);
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      content: "Some descriptions",
      onOk() {
        deleteData(`users/${id}`).then((res) => {
          toast.success(`User ${id} deleted successfully !`);
          getExperiences();
        });
      },
    });
  }

  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>User</h1>
            <Button
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              onClick={openFormModal}
              type="primary"
            >
              <AiOutlineUserAdd /> Add User
            </Button>
          </div>
        )}
        dataSource={experiences}
        columns={columns}
        loading={loading}
        scroll={{ x: 600 }}
      />
      <Modal
        title="User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selected ? "Save Experiences" : "Add Experiences"}
      >
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="user"
          initialValues={{ role: "client" }}
        >
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[
              {
                message: "The input is not valid First Name!",
              },
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                message: "The input is not valid Last Name!",
              },
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name="username"
            label="User Name"
            rules={[
              {
                message: "The input is not valid User Name!",
              },
              {
                required: true,
                message: "Please input your User Name!",
              },
            ]}
          >
            <Input placeholder="User Name" />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: "Please input your role !",
              },
            ]}
          >
            <Select
              options={USER_ROLES.map((role) => ({ label: role, value: role }))}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: selected ? false : true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: selected ? false : true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Experiences;
