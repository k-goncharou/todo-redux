import {connect} from "react-redux";
import TodoListItem from "./TodoListItem";
import {useState} from "react";

const TodoList = (props) => {
    const [input, setInput] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault()
        const newItem = {
            id: Math.random().toString(),
            task: input,
            isDone: false,
        }
        props.createItem(newItem)
        setInput("")
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    value={input}
                    required
                    onChange={(event) => setInput(event.target.value)}
                />
                <button type={"submit"}>Create</button>
            </form>
            {props.list.map(elem =>
                <TodoListItem key={elem.id} item={elem}/>)}

        </div>
    )
}

const mapStateToProps = (state) => ({
    list: state.todoList,
    title: state.title,
})

const mapDispatchToProps = (dispatch) => ({
    createItem: (newItem) => dispatch({
        type: "createTask",
        payload: newItem,
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)