import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import classes from './Container.module.css';

export default function ContainerFn() {
  const [show, setshow] = useState(false);
  return (
    <Container fluid>
      <Row>
        {/* <button className='menuButton' onClick={() => setshow(!show)}>
          Menus
        </button> */}
        {/* <button
          className='navbar-toggler'
          data-bs-toggle='collapse'
          and
          data-bs-target='#thetarget'
        > */}
        <img
          // className='menuButton'
          className={`navbar-toggler ${classes.menuButton}`}
          data-bs-toggle='collapse'
          and
          data-bs-target='#thetarget'
          style={{ width: '60px' }}
          // onClick={() => setshow(!show)}
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAACRCAMAAAD0BqoRAAAAUVBMVEX///8AAADT09M/Pz+UlJTt7e1DQ0NxcXGcnJzx8fGOjo7f398kJCR8fHzAwMD4+PhVVVXl5eW3t7fLy8tlZWUvLy+oqKhNTU0aGhqxsbGioqLy1CmkAAABWElEQVR4nO3b3Y6CMBRF4RYsoqJIBf/e/0FHkkm8OXAxyfRskvU9wboo0MIhBAAAAAAA8C+GvG/qkpp9HtaC2imWN7WLPYfGoWfWHBaKvII+SXbQ0S0oxqMVdOoci7qTUXR3DIrxbhQ9XIseRpFrUIybKHq6Bj2NorNr0dkourgWXYyi/uoYdO2NolA5FlVWUAgvt6CXHfRZSj4Pks5aRL/Su/wGaWrTctC8vlNVVjLXNAAAALajH3K7K6nNw+om8jYW32bHON6Wg7zesplv2GZ+J3/r1B88D5ALR8hUOxbV1pktOwbFmI0ij8vsazSKXIM28h5Sr0hvHelda3r3I717tuBzTfDZL7g/EtxDAgAAQJ/at+zkMBC5+r1fbiZCbm5EbrZGb/5Ib0ZLb45Nb9bPNWgj7yH15mr1Zo/15rP1ZtgF5/wF/4XQ+18kCP5TAwAAAAAA/u4HgtYo0rb7BTsAAAAASUVORK5CYII='
          alt='menu icon'
        />
        {/* </button> */}
        {/* <div className='sideBarContainer'>
          <Sidebar />
        </div> */}
        {/* {show && (
          <div className='sideBarContainer'>
            <Sidebar />
          </div>
        )} */}
        <Col
          md='3'
          sm='3'
          xs='2'
          id='thetarget'
          className={classes.sideBar}
          // className={`${classes.sideBar} hidden-xs`}
        >
          <Sidebar />
        </Col>
        <Col className={classes.outlet}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
