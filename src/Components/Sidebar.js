import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import items from '../menuItems.json';

export default function Sidebar() {
  return (
    <>
      <div className='sideBarHeader'>Side Bar</div>
      <ul className='allMenus'>
        {items.map((item, index) => {
          console.log('ITEM', item);
          if (item.children)
            return (
              <MultipleMenu
                key={index}
                name={item.name}
                children={item.children}
              />
            );
          return <SingleMenu key={index} name={item.name} path={item.path} />;
        })}
      </ul>
    </>
  );
}

function SingleMenu({ name, path }) {
  const [currPath, setCurrPath] = useState('');
  const location = useLocation();
  useEffect(() => {
    setCurrPath(window.location.pathname);
  }, [location]);
  return (
    <NavLink className='nav-link active' to={path}>
      <li
        className='singleHeader'
        style={currPath === path ? { backgroundColor: 'lightcoral' } : {}}
      >
        {name}
      </li>
    </NavLink>
  );
}

function MultipleMenu({ name, children }) {
  const [show, setShow] = useState(false);
  return (
    <li className='multipleList'>
      <section className='multipleHeader'>
        <div>{name}</div>
        <span
          onClick={() => {
            setShow(!show);
            console.log(!show);
          }}
        >
          {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </section>
      <div>
        <ul>
          {children.map((child, index) => {
            if (show)
              if (child.children)
                return (
                  <MultipleMenu
                    key={index}
                    name={child.name}
                    children={child.children}
                  />
                );
              else
                return (
                  <SingleMenu key={index} name={child.name} path={child.path} />
                );
            return <></>;
          })}
        </ul>
      </div>
    </li>
  );
}
