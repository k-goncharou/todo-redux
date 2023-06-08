import {connect} from "react-redux";
import EditTodoModal from "./EditTodoModal";


function TodoListItem(props) {
    return (
        <ul>
            <li>
                {props.item.task}
                <EditTodoModal
                    key={props.item.id}
                    item={props.item}/>
                <button onClick={() => props.deleteTask(props.item.id)}>Delete</button>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => (
    {
        deleteTask: (id) => dispatch({
            type: "deleteTask",
            payload: id
        })
    })
export default connect(null, mapDispatchToProps)(TodoListItem)