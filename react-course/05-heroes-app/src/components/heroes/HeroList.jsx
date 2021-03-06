import { useMemo } from "react";
import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher"
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

	return (
		<div className="card-columns animate__animated animate__fadeIn">
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
