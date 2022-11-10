import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WorkLog from "../components/WorkLog";

const DevelopWorkLog = ({ DevelopList }) => {
  const [originData, setOriginData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (DevelopList.length >= 1) {
      const targetContent = DevelopList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetContent) {
        setOriginData(targetContent);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, DevelopList]);

  return (
    <div>
      <WorkLog originData={originData} />
    </div>
  );
};

export default DevelopWorkLog;
