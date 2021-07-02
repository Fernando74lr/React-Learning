import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import useCounter from '../../hooks/useCounter';

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = !!data && data[0];
    console.log(author, quote);

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                        
                    (
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">{ quote }</p><br />
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary" onClick={ () => increment() }>
                Next quote
            </button>
        </div>
    );
}

export default MultipleCustomHooks;
