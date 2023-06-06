import {connect} from "react-redux";


function TodoListItem(props) {
    return (
        <li>
            {props.item.task} {" "}
            <button onClick={() => props.deleteTask(props.item.id)}>Delete</button>
        </li>
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