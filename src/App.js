import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/List";
import Login from "./components/Login";
import "./App.css";
import DevelopWorkLog from "./develop/DevelopWorkLog";
import SecurityWorkLog from "./security/SecurityWorkLog";
import New from "./components/New";
import CeoWorkLog from "./ceo/CeoWorkLog";
import { DevelopList } from "./api/DevelopList";
import { SecurityList } from "./api/SecurityList";
import { isElementOfType } from "react-dom/test-utils";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const App = () => {
  const [data, setData] = useState([]);

  const CEOList = [
    {
      id: 1,
      division: "대표이사",
      name: "김민성",
      maintask: "",
      detailtask: "",
      lefttask: "",
      taskplan: "",
      isUpload: "false",
    },
  ];

  const onCreate = (maintask, detailtask, lefttask, taskplan) => {
    const newItem = {
      id: 1,
      division: "대표이사",
      name: "김민성",
      maintask,
      detailtask,
      lefttask,
      taskplan,
      isUpload: "true",
    };
    setData(newItem);
  };

  const onEdit = (newMaintask, newDetailtask, newLefttask, newtaskplan) => {
    setData({
      ...data,
      maintask: newMaintask,
      detailtask: newDetailtask,
      lefttask: newLefttask,
      taskplan: newtaskplan,
    });
  };

  const onRemove = (ceoId) => {
    setData(CEOList);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/list"
            element={
              <List
                CEOList={CEOList}
                DevelopList={DevelopList}
                SecurityList={SecurityList}
                data={data}
              />
            }
          />
          <Route path="/new" element={<New onCreate={onCreate} />} />
          <Route
            path="/ceo"
            element={
              <CeoWorkLog data={data} onEdit={onEdit} onRemove={onRemove} />
            }
          />
          <Route
            path="/develop/:id"
            element={<DevelopWorkLog DevelopList={DevelopList} />}
          />
          <Route
            path="/security/:id"
            element={<SecurityWorkLog SecurityList={SecurityList} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
