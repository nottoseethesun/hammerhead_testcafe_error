import React from 'react';

function Debug({ log, addLog }) {
  setTimeout(() => {
    document.querySelector('#form').submit();
  }, 100);
  return (
    <div>
      <form action="/sent" id="form"></form>
    </div>
  );
}

export default Debug;
