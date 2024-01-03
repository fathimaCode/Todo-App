export default function TodoTextField({textValue, textPlaceholder, textOnchange}){
    return (

        <>
        <div className="text-container">
        <input type="text" value={textValue} placeholder={textPlaceholder} onChange={textOnchange} className="todo-textfield"/>
        </div>
        
        </>
    );
}