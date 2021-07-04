import { Col, Row,Spin } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import firebase from './firebase'
import { getEntries } from "./utils"
import Container from './components/taskContainer/container'
import "./App.css";
import "./index.css";

const database = firebase.database() ;
const taskGenerator=()=>{
  return {
    name: "task" + Math.random(),
    id: uuidv4(),
    description: "Description"+ Math.random()
  }
}

function App() {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    database.ref().child("tasks").on('value',(snapshot) => {
      if (snapshot.exists()) {
        console.log("data" , Date.now())
        console.log(snapshot.val());
        let data = snapshot.val() ;
        let processedData = getEntries(data) ;
        setTasks(processedData)
        setLoading(false)
      } else {
        console.log("No data available");
        setLoading(false)
      }
    });
  },[])
  console.log(Date.now(), "render" ,tasks)
  
  return (
    <div>
    <Spin wrapperClassName="loader" spinning ={loading} tip="Loading...">
      <div className="App bg-gradient-to-r from-blue-500 h-screen ">
      <Container tasks ={tasks} />
      </div>
    </Spin>
    </div>
    
    
  );
}


export default App;
