import { NotesApppBar } from "./NotesApppBar";

export const NoteScreen = () => {
    return (
        <div className="notes_main-content">

            <NotesApppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://cdn.hovia.com/app/uploads/Blue-Illustrated-Landscape-Mountains-Wallpaper-Mural-820x532.jpg"
                        alt="mountains"
                    />
                </div>
            </div>
        </div>
    );
}
