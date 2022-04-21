import {useNavigate, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import './NotePage.css'
import {removeNote, updateNote} from "../../redux/slices/notesReducer";
import {useState} from "react";

export const NotePage = () => {

    const {id} = useParams()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [noteData] = useSelector(state => state.notes.filter(note => note.id == id ))

    const onRemoveNote = () => {
        const result = window.confirm('удалить?')

        if(result) {
            dispatch(removeNote({id: id}))
            navigate('/')
        }
    }

    const [title, setTitle] = useState(noteData.title)
    const [titleText, setTitleText] = useState(noteData.titleText)

    const onChangeNote = () => {
        dispatch(updateNote({id, title, titleText}))
        navigate('/')

    }

    return (
        <div className='note-page-container'>
            <button onClick={() => navigate('/')}>Назад</button>
            <h2>Запись: {noteData.title}</h2>
            <input onChange={(e) => setTitle(e.target.value)} value={title}/>
            <textarea onChange={(e) => setTitleText(e.target.value)} className='note-page-text'
                      value={titleText}/>
            <div className='note-buttons-container'>
                <button onClick={onRemoveNote}>Удалить</button>
                <button onClick={onChangeNote}>Сохранить</button>
            </div>
        </div>
    )
}