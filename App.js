import "./App.css";
import { useState, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "안병훈",
//     content: "하이 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },

//   {
//     id: 2,
//     author: "이우태",
//     content: "하이 2",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },

//   {
//     id: 3,
//     author: "이채원",
//     content: "하이 3",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },

//   {
//     id: 4,
//     author: "윤호상",
//     content: "하이 4",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
