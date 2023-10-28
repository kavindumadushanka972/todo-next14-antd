'use client';

import React from 'react';
import { Card } from 'antd';
import { Col, Row } from 'reactstrap';

import AddTodoForm from '@/components/AddTodoForm';

const page = () => {
  return (
    <div>
      <Row>
        <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12" className='mt-3'>
          <Card title="Add Todo">
            <AddTodoForm />
          </Card>
        </Col>

        <Col xxl="6" xl="6" lg="6" md="12" sm="12" xs="12" className='mt-3'>
          <Card title="Todo List"></Card>
        </Col>
      </Row>
    </div>
  );
};

export default page;
