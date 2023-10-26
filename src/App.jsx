import SearchBox from './components/SearchBox';
import SearchResult from './components/SearchResult';
import './App.css'
import { useState } from 'react'

function App() {

  // state gets mapped to the data from the fetch api in SearchBox component
  const [results, setResults] = useState([]);

  return (
    <div className="page">
      <h1>Search Aussie Cities</h1>
      <div className="page-search">
        <SearchBox setResults={setResults} />
        <div className="search-results">
          {results && results.map(result => <SearchResult key={result.id} result={result}/>)}
        </div>
      </div>
    </div>
  )
}

export default App
