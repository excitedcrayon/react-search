import { useState } from "react";

const SearchBox = ({ setResults }) => {

    const [value, setValue] = useState('');

    const searchData = (value) => {
        fetch("http://localhost/react-search-backend/")
        .then((response) => {return response.json()})
        .then((json) => {
            const results = json.filter((city) => {
                return value && city && city.name && city.name.toLowerCase().includes(value);
            });
            setResults(results);
        });
    };

    const handleChange = (value) => {
        setValue(value);
        searchData(value);
    }

    return (
        <div className="search">
            <input type="text" value={value} onChange={(e) => { handleChange(e.target.value); }}/>
        </div>
    );
}

export default SearchBox;