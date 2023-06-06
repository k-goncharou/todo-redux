import {Modal, ModalBody, ModalHeader, ModalFooter} from "react-bootstrap";
import {connect} from "react-redux";

function EditTodoModal() {
    return (
        <div>
            <button>Edit</button>
            <Modal>
                <ModalHeader>
                </ModalHeader>
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <button>Save</button>
                    <button>Cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
        updateTask: (id) => dispatch({
            type: "updateTask",
            payload: id
        })
    }
)
export default connect(null, mapDispatchToProps)(EditTodoModal)