import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const DevelopItem = ({ id, name, memo, view }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();

  return (
    <div className="Develop_block">
      <p className="Develop_name">{name}</p>
      <button
        className="Develop_link"
        onClick={() => navigate(`/develop/${id}`)}
      >
        상세보기
      </button>
      <p className="Develop_time">{date}</p>
      <p className="Develop_memo">{memo}</p>
      <p className="Develop_view">
        <FiCheckCircle />
      </p>
    </div>
  );
};

export default DevelopItem;
