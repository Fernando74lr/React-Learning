import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

	const heroes = getHeroeByPublisher(publisher);

	return (
		<div className="card-columns">
		   {
			   heroes.map(heroe => (
					<HeroCard
                        key={ heroe.id }
						{ ...heroe }
					/>
			   ))
		   } 
		</div>
	)
}
