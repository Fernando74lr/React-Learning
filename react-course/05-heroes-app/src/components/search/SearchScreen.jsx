import { useLocation } from "react-router-dom";
import { HeroCard } from "../heroes/HeroCard";
import useForm from "../hooks/useForm";
import queryString from "query-string";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";

export const SearchScreen = ({ history }) => {

    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);
    
    const [ formValues, handleInputChange ] = useForm({ request: q });

    const { request } = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(request);
        history.push(`?q=${request}`);
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

                    { (q === '') &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    { (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }

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
