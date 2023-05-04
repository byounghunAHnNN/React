import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`Counter A update - count :${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`Counter B Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;
  // return true; // 이전 프롭스 현재 프롭스가 같다 => 리렌더링을 일으키지 않게 된다.
  // return false 이전과 현재가 다르다 -> 리렌더링을 일으키게 된다.
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setobj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <h2>Counter B</h2>
      <MemoizedCounterB obj={obj} />
      <button
        onClick={() =>
          setobj({
            count: obj.count,
          })
        }
      >
        B button
      </button>
    </div>
  );
};

export default OptimizeTest;
