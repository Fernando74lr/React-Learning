import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import useForm from "../hooks/useForm";

export const SearchScreen = () => {
    
    const heroesFiltered = heroes;

    const [ formValues, handleInputChange ] = useForm({ request: '' });

    const { request } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(request);
    }

    return (
        <div style={{ padding: 30 }}>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            value={ request }
                            onChange={ handleInputChange }
                            // Name es importante para poder escribir en el input 
                            // (se llama igual que lo que recibe el "value")
                            name="request"
                        />
                        <br />
                        <button
                            type="submit"
                            className="btn m1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr />

                    {
                        heroesFiltered.map(heroe => (
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
