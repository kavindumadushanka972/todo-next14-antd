'use client';
import React from 'react';
import { Button, Form, Input } from 'antd';

/**
 * Render a form for adding a new todo.
 *
 * @return {ReactElement} The rendered form component.
 */
const AddTodoForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    task?: string;
  };

  return (
    <Form
      name="add-todo-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        name="task"
        rules={[{ required: true, message: 'Please input your task!' }]}
      >
        <Input placeholder="Enter your task" />
      </Form.Item>

      <Form.Item className="text-center">
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodoForm;
