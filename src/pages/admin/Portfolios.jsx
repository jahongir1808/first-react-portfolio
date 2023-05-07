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

const Portfolios = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
    },
    {
      title: "Actions",
      width: 200,
      render: ({ _id }) => (
        <>
          <input type="file" />
          <Button type="primary" danger onClick={() => deleteUser(_id)}>
            <AiOutlineUserDelete />
          </Button>
        </>
      ),
    },
  ];
  const {
    data: portfolios,
    loading,
    recall: getPortfolios,
  } = useFetch(`portfolios${ROLE === "client" ? `?user[in]=${USER_ID}` : ""}`);
  const [form] = Form.useForm();
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
        putData(`portfolios/${selected}`, values).then((data) => {
          getPortfolios();
          setIsModalOpen(false);
        });
      } else {
        sendData("portfolios", values).then((res) => {
          getPortfolios();
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
    getData(`portfolios/${id}`).then((res) => {
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
        deleteData(`portfolios/${id}`).then((res) => {
          toast.success(`User ${id} deleted successfully !`);
          getPortfolios();
        });
      },
    });
  }

  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Portfolio</h1>
            <Button
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
              onClick={openFormModal}
              type="primary"
            >
              <AiOutlineUserAdd /> Add Portfolio
            </Button>
          </div>
        )}
        dataSource={portfolios}
        columns={columns}
        loading={loading}
        scroll={{ x: 600 }}
      />
      <Modal
        title="Portfolio"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={selected ? "Add Portfolio" : "Add Portfolio"}
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

export default Portfolios;
