import TodoTextField from "./todo_textfield";

export default function EditItem({children}){
    return (
        <div className="EditForm">
            {children}
        </div>
    );
}