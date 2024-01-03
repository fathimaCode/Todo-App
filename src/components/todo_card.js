export default function TodoCard({children}){

    return(

        <>
        <div className="todo-container" >
           {children} 
        </div>
        </>
    );
}