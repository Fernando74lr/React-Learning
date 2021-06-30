import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {

    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log('~ state', state);

    return (
        <div>
            <h1>Custom Hooks!</h1>
        </div>
    );
}

export default MultipleCustomHooks;
