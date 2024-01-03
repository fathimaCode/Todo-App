export default function TodoInfo({Completed, Pending,total}){
    return (
        <div className="todo_item_info">
            <p>Total Task: {total}</p>
            <p>Completed: {Completed}</p>
            <p>Pending: {Pending}</p>
        </div>
    );
}