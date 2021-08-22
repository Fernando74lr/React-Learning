import { Redirect, useParams } from "react-router-dom";
import { getHeroeById } from "../../selectors/getHeroeById";

export const HeroScreen = () => {

    // Get params by URL
    const { heroId } = useParams();
    
    const heroe = getHeroeById(heroId);

    if ( !heroe ) {
        return (<Redirect to="/" />);
    }
    
    // const {
    //     id,
    //     superhero,
    //     publisher,
    //     alter_ego,
    //     first_appearance,
    //     characters
    // } = heroe;

    return (
        <div>
            <h1>Heroes Screen</h1>
        </div>
    );
}
