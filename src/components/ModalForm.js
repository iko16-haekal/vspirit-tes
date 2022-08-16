/* eslint-disable react-hooks/exhaustive-deps */
import { Input, message, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPosts, updatePosts } from "../redux/actions/post";

const ModalForm = ({ data, visible, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  // i dont know why i cant assign the default value in useState so i decided to set default value on useEffect
  useEffect(() => {
    if (data) {
      setDescription(data.body);
      setTitle(data.title);
    }
  }, [visible]);

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleClose = () => {
    setDescription("");
    setTitle("");
    onClose();
  };

  const buttonDisabledCondition = description === "" || title === "";

  const handleSubmit = () => {
    const payload = {
      id: data?.id || Math.round(Math.random),
      title,
      body: description,
    };

    dispatch(data ? updatePosts(payload) : createPosts(payload));
    message.success(data ? "Update post success" : "Create post success");
    handleClose();
  };

  return (
    <Modal
      visible={visible}
      destroyOnClose
      title={data ? "Edit post" : "Create post"}
      okText="Submit"
      onCancel={handleClose}
      okButtonProps={{ disabled: buttonDisabledCondition }}
      onOk={handleSubmit}
    >
      <Input
        size="large"
        placeholder="Title"
        value={title}
        onChange={(event) => handleInputChange(event, setTitle)}
      />
      <br />
      <Input.TextArea
        placeholder="Description"
        className="mt-4"
        size="large"
        value={description}
        onChange={(event) => handleInputChange(event, setDescription)}
      />
    </Modal>
  );
};

export default ModalForm;
