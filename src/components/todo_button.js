import { IoMdAdd } from "react-icons/io";
export default function TodoButton({buttonClick,buttonName}){
    return(

        <div className="todo-button">
            <IoMdAdd onClick={buttonClick} className="todo_button"/>
       
        </div>
    );
}