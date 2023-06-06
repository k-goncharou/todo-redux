import {Modal, ModalBody, ModalHeader, ModalFooter} from "react-bootstrap";
import {connect} from "react-redux";
import {useState} from "react";

function EditTodoModal(props) {
    const [modal, setModal] = useState(false)
    const [input, setInput] = useState("")
    const handleEdit = () => {
        toggle()
        const newTitle = {
            title: input,
            isDone: false }
        props.updateTask(props.item, newTitle)
    }
    const toggle = () => setModal(!modal)

    return (
        <div>
            <button>Edit</button>
            <Modal>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                    <div>
                        <span> New title: </span>
                        <input type="text"
                               value={input}
                               onChange={(event) => setInput(event.target.value)}
                               placeholder="What todo"/>
                    </div>
                    <div>
                        {/*<input type="text"/>  is done*/}

                    </div>
                </ModalBody>
                <ModalFooter>
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={toggle}>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        updateTask: (id, newTitle) => dispatch({
            type: "updateTask",
            payload: {id, newTitle}
        })
    }
)
export default connect(null, mapDispatchToProps)(EditTodoModal)