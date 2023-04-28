import React, { ussEffect, useState, useEffect } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount!");

    return () => {
      // Unmount시점에 실행된다
      console.log("unmount");
    };
  }, []);

  return <div>Unmount Testing Component</div>;
};
const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>;{isVisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
