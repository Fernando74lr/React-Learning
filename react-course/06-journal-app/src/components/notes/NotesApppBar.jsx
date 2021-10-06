import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUpdloading } from "../../actions/notes";

export const NotesApppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)

    const handleSave = () => {
        console.log(active);
        dispatch( startSaveNote(active) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if ( file ) {
            dispatch( startUpdloading(file) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>August 28, 2020</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: 'none'}}
                onChange={ handleFileChange }
            />

            <div>
                <button
                    className="btn"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>

                <button
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>                
            </div>
        </div>
    );
}
