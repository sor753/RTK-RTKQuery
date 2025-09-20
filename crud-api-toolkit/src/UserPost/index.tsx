import { Button, Card, Input, Space } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPost } from '../redux/features/postSlice';
import type { AppDispatch, RootState } from '../redux/store';
import LoadingCard from './LoadingCard';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [id, setId] = useState<number>();
  const { loading, post } = useSelector((state: RootState) => state.app);

  const fetchUserPost = () => {
    if (!id) {
      window.alert('Please enter user id');
    } else {
      dispatch(getPost({ id: id! }));
      setId(undefined);
    }
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Fetch Post</h1>
      <Input placeholder="Enter user Id" type="number" value={id} onChange={(e) => setId(Number(e.target.value))} style={{ width: '300px' }} />
      <br />
      <br />
      <Space size="small" style={{ margin: 10 }}>
        <Button type="primary" onClick={fetchUserPost}>
          Fetch User Post
        </Button>
        <Button type="primary" onClick={() => navigate('/createPost')}>
          Create User Post
        </Button>
      </Space>
      <br />
      <br />
      {loading ? (
        <LoadingCard count={1} />
      ) : (
        <>
          {post.length > 0 && (
            <div className="site-card-border-less-wrapper">
              <Card type="inner" title={post[0].title}>
                <p>Id: {post[0].id}</p>
                <p>User Id: {post[0].userId}</p>
                <span>{post[0].body}</span>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
