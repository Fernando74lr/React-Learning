import { getHeroeByPublisher } from "../../selectors/getHeroeByPublisher"

export const HeroList = ({ publisher }) => {

	const heroes = getHeroeByPublisher(publisher);

	return (
		<ul>
		   {
			   heroes.map(heroe => (
					<li key={ heroe.id }>
						{ heroe.superhero }
					</li>
			   ))
		   } 
		</ul>
	)
}
