import {Box, Modal} from "@mui/material";
import {useState} from "react";
import './Modal.css'
import {useDispatch} from "react-redux";
import {addNewPost} from "../../redux/slices/notesReducer";

export const NoteModal = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [title, setTitle] = useState('')
    const [titleText, setTitleText] = useState('')

    const onCloseModal = () => {
        handleOpen()
        setTitle('')
        setTitleText('')
    }

    const onNoteCreate = () => {
        dispatch(addNewPost({title, titleText}))
        handleOpen()
        setTitle('')
        setTitleText('')
    }

    return(
        <div>
        <button onClick={handleOpen}>Добавить новую запись</button>
    <Modal open={open} onClose={onCloseModal}>
            <Box className='modal-box'>
                <input value={title}
                       onChange={(e) => setTitle(e.target.value)}
                       placeholder='title'/>
                <input value={titleText}
                       onChange={(e) => setTitleText(e.target.value)}
                       className='modal-text' placeholder='content'/>
                <div>
                    <button onClick={onCloseModal}>Отмена</button>
                    <button disabled={!title || !titleText} onClick={onNoteCreate}>Сохранить</button>
                </div>
            </Box>
        </Modal>
        </div>
    )
}
