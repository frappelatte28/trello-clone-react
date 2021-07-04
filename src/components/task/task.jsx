import { Card, Col, Row } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined} from "@ant-design/icons";
import { Modal, Button } from "antd";
import "./task.css";
import { useState } from "react";
import { Input } from 'antd';

const { TextArea } = Input;
const Task = (props) => {
  let { name, id, description} = props;
  
  const [isModalActive, setModalActive] = useState(false);
  const [input, setInput] = useState();
  const handleOnCancel =()=>{
      setModalActive(false)
  }
  const handleOnChange=(e)=>{
    setInput(e.target.value)
  }
  const handleOnDelete =(e)=>{
    // console.log(tasks.id)
  }
  // const onChange = e => {
  //   console.log(e);
  // };
    return (
      <div className="task-wrapper m-2 p-2">
        <Row className="p-1 border-b-2 border-indigo-600 ">
        <Col xs={18} onClick ={()=>{setModalActive(true)}} className="p-1 text-xl ">{name}</Col>
        <Col xs={6}>
          <Row className="p-1 justify-end">
            <EditOutlined className="ml-2 mt-2"/>
            <DeleteOutlined onClick={handleOnDelete} className="ml-2 mt-2"/>
          </Row>
        </Col>
        </Row>
        <Modal
        footer={null}
        title={name}
        centered
        visible={isModalActive}
        width={"65%"}
        onCancel={handleOnCancel}
        closable={true}
      >

        <h1>Description</h1>
        <Row >{description}</Row>
        <TextArea id = "text-area-des" onChange={handleOnChange} allowClear placeholder="Add a more detailed description" rows={3} />
        <Row >
        <Button className="m-2" type="primary">Save</Button>
        <Button onClick={handleOnCancel} className="m-2" type="primary"><CloseOutlined /></Button>
        </Row>
      </Modal>
      </div>
    );
};
export default Task;
