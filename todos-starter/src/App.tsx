import { Fragment, useState } from 'react';
import './App.css';
import { useAddTodoMutation, useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from './feature/api/apiSlice';

function App() {
  const { data: todos, isLoading, isSuccess, isError, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      // logic to add todo using RTK Query
      addTodo({ title: todo, completed: false });
      setTodo('');
    }
  };

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = todos.map((todo) => {
      return (
        <Fragment key={todo.id}>
          <ul>
            <li className={todo.completed ? 'checked' : ''} onClick={() => updateTodo({ ...todo, completed: !todo.completed })}>
              {todo.title}
              <span className="close" onClick={() => deleteTodo(todo.id)}>
                x
              </span>
            </li>
          </ul>
        </Fragment>
      );
    });
  } else if (isError) {
    // https://redux-toolkit.js.org/rtk-query/usage-with-typescript
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

      content = <p>{errMsg}</p>;
    } else {
      content = <p>{error.message}</p>;
    }
  }

  return (
    <div className="App">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <h2>My To Do List</h2>
          <input type="text" placeholder="Your Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button className="addBtn" type="submit">
            Add
          </button>
        </form>
      </div>
      {content}
    </div>
  );
}

export default App;
