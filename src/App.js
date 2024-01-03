import { useState } from "react";
import "./App.css";
import TodoButton from "./components/todo_button";
import TodoCard from "./components/todo_card";
import TodoTextField from "./components/todo_textfield";
import { todoData } from "./data/tododata";
import TodoDisplay from "./components/todo_display";
import TodoInfo from "./components/todo_info";
import EditItem from "./components/EditItem";

function App() {
  const [todoItem, settodoItem] = useState("");
  const [storeTodoData, setStoreTodoData] = useState([]);
  const onTextChange = (event) => {
    settodoItem(event.target.value);
  };
  const storeTodoItem = () => {
    if(todoItem==""){
      alert("kindly fill the field")
    }
    else{
      const currentIndex = storeTodoData.length + 1;
      const newItem = { id: currentIndex, item: todoItem,status:true };
      setStoreTodoData((preItem) => [...preItem, newItem]);
  
      settodoItem("");
    }
 
  };
  const removeItem = (id) => {
    const itemIndex = storeTodoData.findIndex((i)=>i.id===id)
    const temp = [...storeTodoData]
    temp[itemIndex].status = false
    setStoreTodoData(temp)
    console.log(temp[itemIndex])
   
    
    console.log(storeTodoData)
  };

  const deleteItem= (id)=>{
    const temp = storeTodoData.filter((item)=>item.id !== id)

    setStoreTodoData(temp)
  
  }

  const completedTask = storeTodoData.filter((item)=>item.status===false)
  const pendingTask = storeTodoData.filter((item)=>item.status===true)
  const totalItem = storeTodoData.length
  return (
    <div className="App">
      
      <TodoCard>
      <h1>Todo App</h1>
        <main>
          <TodoTextField
            textValue={todoItem}
            textPlaceholder="Enter Todo Item"
            textOnchange={onTextChange}
          ></TodoTextField>
          <TodoButton buttonClick={storeTodoItem} buttonName="Add"></TodoButton>
        </main>
        <TodoDisplay data={storeTodoData.reverse()} onRemoveHandler={removeItem} onDeleteHandler={deleteItem}/>
        <TodoInfo Pending={pendingTask.length} Completed={completedTask.length} total={totalItem}/>
      </TodoCard>
     <EditItem >
     <TodoTextField
            textValue={todoItem}
            textPlaceholder="Enter Todo Item"
            textOnchange={onTextChange}
          ></TodoTextField>
          <TodoButton buttonClick={storeTodoItem} buttonName="update"></TodoButton>
     </EditItem>
    </div>
  );
}

export default App;
