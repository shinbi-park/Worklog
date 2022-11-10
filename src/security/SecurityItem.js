import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const SecurityItem = ({ id, name, memo }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const navigate = useNavigate();

  return (
    <div className="Security_block">
      <p className="Security_name">{name}</p>
      <button
        className="Security_link"
        onClick={() => navigate(`/security/${id}`)}
      >
        상세보기
      </button>
      <p className="Security_time">{date}</p>
      <p className="Security_memo">{memo}</p>
      <p className="Security_view">
        <FiCheckCircle />
      </p>
    </div>
  );
};

export default SecurityItem;
