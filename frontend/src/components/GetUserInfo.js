import React, { useState } from "react";
import axios from "axios";


const GetUserInfo = () => {

  
    const fetchInformation = async () => {
      const res = await axios.get("http://localhost:3001/information");
      const info = res.data;
      setInfo(info);
      setToggle(true)
      console.log(res);
  
    };
   


  const [info, setInfo] = useState([]);


const[toggle,setToggle] = useState(false)


  
  return (
    
    <div>
     
       
       <button onClick={fetchInformation}>show-Info</button> 
       
        
        {info.map((info) => (
          <ul key={info._id}>

            <li>First Name:  {info.firstName}</li>
            <li>Last Name:  {info.lastName}</li>
            <li>Email:  {info.email}</li>
            <li>Password: {info.password}</li>
          </ul> 
        
        ))} 
        
       
       
    </div>
  );
};

export default GetUserInfo;
