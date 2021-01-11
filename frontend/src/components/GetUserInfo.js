import React, { useState, useEffect } from "react";
import axios from "axios";

const GetUserInfo = () => {
  useEffect(() => {
    const fetchInformation = async () => {
      const res = await axios.get("http://localhost:3001/information");
      const info = res.data;
      setInfo(info);
      console.log(res);
    };
    fetchInformation();
  }, []);

  const [info, setInfo] = useState([]);

  return (
    <div>
        <button>Show-info</button>
      {info.map((info) => (
        <ul>
          <li>{info.firstName}</li>
          <li>{info.lastName}</li>
          <li>{info.email}</li>
          <li>{info.password}</li>
        </ul>
      ))}
      
    </div>
  );
};

export default GetUserInfo;
