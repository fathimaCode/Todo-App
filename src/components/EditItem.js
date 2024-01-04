
import { GrClose } from "react-icons/gr";
export default function EditItem({children, editFormClassName, closeClick}){
    return (
        <div className={editFormClassName}>
            <div className="card">
            <GrClose onClick={closeClick} className="closeIcon"/>
           
            {children}
            </div>
           
        </div>
    );
}