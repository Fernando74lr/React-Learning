import { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

// import batman from '../../assets/heroes/dc-batman.jpg'; // static resource
const heroImages = require.context('../../assets/heroes', true);

export const HeroScreen = ({ history }) => {

    // Get params by URL
    const { heroeId } = useParams();
    
    const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if ( !heroe ) {
        return (<Redirect to="/" />);
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    const handleReturn = () => {
        switch (publisher) {
            case 'DC Comics':
                history.push('/dc');
                break;
            case 'Marvel Comics':
                history.push('/marvel');
                break;
     
            default:
                history.push('/');
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={`../assets/heroes/${heroeId}.jpg`}
                    // src={ batman }
                    src={ heroImages(`./${heroeId}.jpg`).default }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3> { superhero } </h3> <br />

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b> { first_appearance }
                    </li>
                </ul> <br />

                <h5> Characters </h5>
                <p> { characters }</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={ () => handleReturn() }
                >
                    Regresar
                </button>
            </div>


        </div>
    );
}
