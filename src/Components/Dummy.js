import React from 'react';
import { useParams } from 'react-router-dom';

export default function Dummy() {
  let { name } = useParams();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {name}
    </div>
  );
}
