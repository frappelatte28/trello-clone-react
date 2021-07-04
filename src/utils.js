import firebase from "./firebase";
const getEntries =(obj)=>{
    let result = []
    let keys = Object.keys(obj)
    keys.forEach(element => {
        result.push(obj[element])
    });
    return result ;
}

const database = firebase.database() 
const addTaskToServer =({id, name, description})=>{
    database.ref('tasks/' + id).set({
      id,
      name,
      description
    })
  }
export {getEntries, addTaskToServer}


