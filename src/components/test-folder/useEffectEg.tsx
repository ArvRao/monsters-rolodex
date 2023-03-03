import React, { useState, useEffect } from 'react';

function useEffectEg() {
  const [count, setCount] = useState(0);

//   runs initially and every count is changed
  useEffect(() => {
    console.log("useEffect fired")
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default useEffectEg