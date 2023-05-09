import { Button, Form, Input, Modal, Select, Table, Upload } from "antd";
import React, { useState } from "react";
import {
  deleteData,
  getData,
  putData,
  sendData,
  sendImageData,
} from "../../server/common";
import { ExclamationCircleFilled, InboxOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { AiOutlineUserDelete, AiOutlineUserAdd } from "react-icons/ai";
import { ROLE, USER_ID } from "../../utils";
import { useFetch } from "../../hook";
import { IMAGE_URL } from "../../const";

const { confirm } = Modal;

const Portfolios = () => {
  const [save, setSave] = useState("");
  const [saveUrl, setSaveUrl] = useState("");
  const {
    data: portfolios,
    loading,
    recall: getPortfolios,
  } = useFetch(`portfolios${ROLE === "client" ? `?user[in]=${USER_ID}` : ""}`);
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
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
      render: (Url) => (
        <a href={Url} target="_blank">
          Link
        </a>
      ),
    },
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (photoUrl) => (
        <img
          src={IMAGE_URL + photoUrl._id + "." + photoUrl.name.split(".")[1]}
          alt={photoUrl.name}
          width="50px"
          height="50px"
        />
      ),
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const normFile = (e) => {
    const form = new FormData();
    form.append("file", e.fileList[0].originFileObj);
    sendImageData("upload", form).then((res) => {
      setSave(res);
    });
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      values["photo"] = `${save.data._id}`;
      setSaveUrl(values.url);
      if (selected) {
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
      form.setFieldsValue(res.data);
    });
  }

  function deleteUser(id) {
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
        okText={selected ? "Add Portfolio" : "Save Portfolio"}
      >
        <Form
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="user"
        >
          <Form.Item
            name="name"
            label="name"
            rules={[
              {
                message: "The input is not valid Name!",
              },
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="url"
            label="URL"
            rules={[
              { required: true },
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input placeholder="Url" />
          </Form.Item>
          <Form.Item label="Dragger">
            <Form.Item
              name="photo"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger multiple>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Нажмите или перетащите файлы в эту область для загрузки
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Portfolios;
