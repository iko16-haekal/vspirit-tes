import { Button, Card, message } from "antd";
import { useDispatch } from "react-redux";
import { deletePosts } from "../redux/actions/post";

const ListPost = ({ post, onClickEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePosts(id));
    message.success("delete post success");
  };

  return (
    <Card style={{ margin: "10px auto" }} key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>

      <div className="flex mt-4 content-end">
        <Button type="primary" onClick={onClickEdit}>
          Edit
        </Button>
        <Button
          type="primary"
          className="ml-2"
          danger
          onClick={() => handleDelete(post.id)}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default ListPost;
