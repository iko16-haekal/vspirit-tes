import { Button, Col, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListPost from "../components/ListPost";
import ModalForm from "../components/ModalForm";
import useDisclosure from "../hooks/useDisclosure";
import { getPosts } from "../redux/actions/post";

const Posts = () => {
  const MAX_LENGTH_POST = 100;

  const [id, setId] = useState(1);
  const [selectedData, setSelectedData] = useState();
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.posts);
  const formModalEvent = useDisclosure();

  const handleEditButton = (post) => {
    setSelectedData(post);
    formModalEvent.onOpen();
  };

  const resetSelectedData = () => {
    setSelectedData();
    formModalEvent.onClose();
  };

  useEffect(() => {
    dispatch(getPosts(id));
  }, [id]);

  return (
    <Spin spinning={loading}>
      <Row>
        <Col span={24}>
          <div className="flex items-center content-between">
            <h1>List Post</h1>
            <Button type="primary" onClick={formModalEvent.onOpen}>
              + Add Post
            </Button>
          </div>
        </Col>
        {data?.map((post) => (
          <Col span={24}>
            <ListPost post={post} onClickEdit={() => handleEditButton(post)} />
          </Col>
        ))}
        {id !== MAX_LENGTH_POST && (
          <Col span={24} className="mt-2">
            <Button type="primary" onClick={() => setId(id + 1)}>
              Load one more
            </Button>
          </Col>
        )}
      </Row>
      <ModalForm
        data={selectedData}
        visible={formModalEvent.isOpen}
        onClose={resetSelectedData}
      />
    </Spin>
  );
};

export default Posts;
