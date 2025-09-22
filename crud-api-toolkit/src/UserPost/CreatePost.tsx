import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../redux/store';
import { useState } from 'react';
import { Button, Card, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../redux/features/postSlice';
import LoadingCard from './LoadingCard';

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState<{ title: string; body: string }>({ title: '', body: '' });
  const { post, loading } = useSelector((state: RootState) => state.app);
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: '', body: '' });
    setShowPost(true);
  };

  const showPostBlog = () => {
    return (
      <>
        {loading ? (
          <LoadingCard count={1} />
        ) : (
          <div className="site-card-border-less-wrapper">
            <Card type="inner" title={post[0].title}>
              <p>Id: {post[0].id}</p>
              <p>User Id: {post[0].userId}</p>
              <span>{post[0].body}</span>
            </Card>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <Input placeholder="Enter Title" type="text" onChange={(e) => setValues({ ...values, title: e.target.value })} value={title} style={{ width: '400px' }} />
        <br />
        <br />
        <Input.TextArea placeholder="Enter Body" onChange={(e) => setValues({ ...values, body: e.target.value })} value={body} style={{ width: '400px' }} size="large" />
        <br />
        <br />
        <Space style={{ margin: 10 }}>
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            Go Back
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </form>
      <br />
      <br />
      {showPost && <div>{showPostBlog()}</div>}
    </div>
  );
};

export default CreatePost;
