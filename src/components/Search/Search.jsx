import useDebounce from '../../hooks/useDebounce'
import './Search.css'


function Search({updateSearchTerm} ) {

    const debounceUpdateSearch = useDebounce((e) => updateSearchTerm(e.target.value))
    return (
        <input
         type="text" 
         id='search-pokemon'
         placeholder="Which pokemon you are looking for?"
         onChange = {debounceUpdateSearch}
         />
    )
}

export default Search