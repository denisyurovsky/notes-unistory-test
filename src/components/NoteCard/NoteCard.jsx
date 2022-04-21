import './NoteCard.css'
import {useNavigate} from "react-router";

export const NoteCard = ({id, title, titleText}) => {

    const navigate = useNavigate()

    return (
        <div className='note-card'>
            <h2 className='note-title'>{title}</h2>
            <div className='note-text'>{titleText}</div>
            <button onClick={() => navigate(`/notes/${id}`)} className='note-button'>Перейти</button>
        </div>
    )
}