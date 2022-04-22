import {NoteCard} from "../../components/NoteCard/NoteCard";
import {useSelector} from "react-redux";
import './MainPage.css'
import {NoteModal} from '../../components/Modal/Modal'

export const MainPage = () => {


    const notes = useSelector(state => state.notes)
    return (
    <div className='app-container'>
        <h1>Блог</h1>
        <NoteModal />
        <div className='notes-container'>
            {notes.map((noteItem) => {
                return <NoteCard id={noteItem.id} title={noteItem.title} titleText={noteItem.titleText}
                                 key={noteItem.id}/>
            })}
        </div>
    </div>
    )
}