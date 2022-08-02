import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import classes from './Container.module.css';

export default function ContainerFn() {
  return (
    <Container fluid>
      <Row>
        <Col md='3' className={classes.sideBar}>
          <Sidebar />
        </Col>
        <Col md='9'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
