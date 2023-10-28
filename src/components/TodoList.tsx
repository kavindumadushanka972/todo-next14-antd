'use client';
import React from 'react';
import { removeTodo, toggleTodo } from '@/redux/features/todo-slice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Checkbox, Tooltip } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const TodoList = () => {
  const { Text } = Typography;
  const { list } = useSelector((state: RootState) => state.todoReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      {list.map((todo) => (
        <div key={todo.id}>
          <div className="d-flex justify-content-between">
            <Text>{todo.name}</Text>
            <div className="d-flex">
              <div className="mx-2">
                <Tooltip title="Toggle Task Status">
                  <Checkbox
                    checked={todo.done}
                    onChange={() => handleToggle(todo.id)}
                  ></Checkbox>
                </Tooltip>
              </div>
              <div>
                <Tooltip title="Delete">
                  <DeleteFilled
                    style={{ color: '#f5222d', fontSize: '16px' }}
                    onClick={() => handleDelete(todo.id)}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
