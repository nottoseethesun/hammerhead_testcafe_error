import React from 'react';

function Debug({ log, addLog }) {
  return (
    <div>
      <form action="/redirect">
        <button type="submit">send message</button>
      </form>
    </div>
  );
}

export default Debug;
