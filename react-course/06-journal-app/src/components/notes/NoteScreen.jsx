import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NotesApppBar } from "./NotesApppBar";

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);

    // const dispatch
    const [formValues, handleInputChange] = useForm(note);

    const { body, title } = formValues;

    return (
        <div className="notes_main-content">

            <NotesApppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ body }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    value={ title }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (note.url) &&
                        <div className="notes__image">
                            <img
                                src="https://cdn.hovia.com/app/uploads/Blue-Illustrated-Landscape-Mountains-Wallpaper-Mural-820x532.jpg"
                                alt="mountains"
                            />
                        </div>
                }
            </div>
        </div>
    );
}
