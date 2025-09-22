import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../redux/store';
import { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState<{ title: string; body: string }>({ title: '', body: '' });
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    </div>
  );
};

export default CreatePost;
