import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkLog from "../components/WorkLog";

const SecurityWorkLog = ({ SecurityList }) => {
  const [originData, setOriginData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (SecurityList.length >= 1) {
      const targetContent = SecurityList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetContent) {
        setOriginData(targetContent);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, SecurityList]);
  return (
    <div>
      <WorkLog originData={originData} />
    </div>
  );
};

export default SecurityWorkLog;
