import React, {useState, useRef} from 'react';
import { useKeepAliveEffect } from 'react-keep-alive';
// import B from './B';

function Test() {
  const [index, setIndex] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  useKeepAliveEffect(() => {
    console.log('activated', index);
    console.log(divRef.current && divRef.current.offsetWidth);
    const i = 0;

    return () => {
      console.log('unactivated', index, i);
    };
  });
  return (
    <div>
      <div ref={divRef}>This is a.</div>
      <button onClick={() => setIndex(index + 1)}>click me({index})</button>
    </div>
  );
}

export default Test;