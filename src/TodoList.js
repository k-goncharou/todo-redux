import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    return (
        <div>
            {props.list.map(elem =>
                <TodoListItem key={elem.id} item={elem}/>)}

        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.todoList,
})
export default connect(mapStateToProps) (TodoList)