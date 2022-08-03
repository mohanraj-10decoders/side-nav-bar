import React from 'react';
import { useParams } from 'react-router-dom';

export default function Dummy() {
  let { name } = useParams();
  return (
    <div
      style={{
        height: '100vh',
        margin: '50px',
      }}
    >
      <h2>{name}</h2>
      <p>
        Declarative React : makes it painless to create interactive UIs. Design
        simple views for each state in your application, and React will
        efficiently update and render just the right components when your data
        changes. Declarative views make your code more predictable and easier to
        debug.
      </p>
      <p>
        Component-Based : Build encapsulated components that manage their own
        state, then compose them to make complex UIs. Since component logic is
        written in JavaScript instead of templates, you can easily pass rich
        data through your app and keep state out of the DOM.
      </p>
      <p>
        Learn Once, Write Anywhere : We don’t make assumptions about the rest of
        your technology stack, so you can develop new features in React without
        rewriting existing code. React can also render on the server using Node
        and power mobile apps using React Native.
      </p>
      <section>
        <h1>Heading</h1>

        <section>
          <h1>Heading of inner section</h1>
        </section>
      </section>
    </div>
  );
}
