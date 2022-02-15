import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [keyword, setKeyword] = useState("programming");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: keyword
        }
    }).then(response => setResults(response.data.query.search));
  }, [keyword]);

  const renderedResults  = results.map(result => {
      return (
        <div key={result.pageid} className="item">
            <div className="content">
                <div className="header">
                    {result.title}
                </div>
                {result.snippet}
            </div>
        </div>
      )
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input" onChange={(e) => setKeyword(e.target.value)} value={keyword} />
        </div>
        <div className="ui celled list">
            {renderedResults}
        </div>
      </div>
    </div>
  );
};

export default Search;
<div></div>;
