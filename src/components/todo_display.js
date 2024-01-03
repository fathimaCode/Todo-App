import { CiCircleRemove } from "react-icons/ci";
import { MdDelete ,MdEdit} from "react-icons/md";
export default function TodoDisplay({data, onRemoveHandler, onDeleteHandler}){
   
    return(
        <div className="displayItem">
            
         
            {data.map(item=>( item.status?
            <div className="todo-items-list" key={item.id} >
                
                <div className="my-items" >
                {item.id}. {item.item}
                </div>
                <div className="myBtns">
                <CiCircleRemove  className="remove_icon" onClick={()=>onRemoveHandler(item.id)}/>
                <MdEdit className="EditBtn"/>
                <MdDelete className="DeleteBtn" onClick={()=>onDeleteHandler(item.id)}/>
                </div>
                
            </div>
          :
          <div className="todo-items-list remove-item" >
          <div className="my-items" key={item.id}>
          {item.id}. {item.item}
          </div>
         
      </div>
            ))}
           
           
        </div>
    );
}