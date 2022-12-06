import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
const WorkLog = ({ originData }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();
  return (
    <div className="WorkLog">
      <h2>
        {date} {originData.name} 일일 업무
      </h2>
      <table className="Worklog_table">
        <tbody>
          <tr className="Worklog_title">
            <th>부서</th>
            <td>{originData.division}</td>
            <th>이름</th>
            <td>{originData.name}</td>
          </tr>
          <tr className="Maintask">
            <th>주요업무</th>
            <td colSpan={3}>{originData.maintask}</td>
          </tr>
          <tr className="Detailtask">
            <th>세부업무</th>
            <td colSpan={3}>{originData.detailtask}</td>
          </tr>
          <tr className="lefttask">
            <th>미결업무</th>
            <td colSpan={3}>{originData.lefttask}</td>
          </tr>
          <tr className="taskplan">
            <th>익일 업무 계획</th>
            <td colSpan={3}>{originData.taskplan}</td>
          </tr>
          <tr className="">
            <th>비고</th>
            <td colSpan={3}>{originData.memo}</td>
          </tr>
        </tbody>
      </table>
      <div className="New_button_wrap">
        <Button
          style={{ fontSize: "14px" }}
          label="업무 일지 메인"
          icon="pi pi-bars"
          className="p-button-raised p-button-info p-button-text"
          onClick={() => navigate("/list")}
        />
      </div>
    </div>
  );
};

export default WorkLog;
