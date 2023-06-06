import './App.css';
import TodoList from "./TodoList";
import {connect} from "react-redux";


function App(props) {
    return (
        <div className="App">
            <h1>{props.appName}</h1>
            <TodoList/>
        </div>
    )
}

const mapStateToProps = (state) => ({
        appName: state.title
    })


export default connect(mapStateToProps)(App);
