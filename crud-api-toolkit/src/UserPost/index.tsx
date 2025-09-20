import { Button, Input, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<number>();
  const fetchUserPost = () => {};

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
    </div>
  );
};

export default Home;
