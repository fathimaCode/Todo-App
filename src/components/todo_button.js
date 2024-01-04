import { IoMdAdd } from "react-icons/io";
import { GrEdit } from "react-icons/gr";

export default function TodoButton({buttonClick,buttonName}){
    return(
       
        <div className="todo-button">
            {buttonName !== "update"?(<IoMdAdd onClick={buttonClick} className="todo_button"/>)
            :(<GrEdit  onClick={buttonClick} className="todo_button"/>)}
            
       
        </div>
    );
}