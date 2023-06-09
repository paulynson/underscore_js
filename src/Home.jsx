import { useState, useEffect, useRef } from "react";
import _ from "underscore"; //import underscore module

const HomePage = () => {
  const searchRef = useRef();

  const commuters = [
    "Jane Adeola",
    "Shade Bankole",
    "Bola Tolu",
    "Nike Ogunbiyi",
    "Tope Akande",
    "Olushade Ogunjobi",
    "Bukky Wright",
    "Kemi Falumi"
  ];

  const [search, setSearch] = useState("");
  const [results, setResults] = useState(commuters);

  // Run these when the page renders
  useEffect(() => {
    searchRef.current.focus();
    const getCommuters = _.map(commuters, (commuter) => {
      return (
        <>
          <p>{commuter}</p>{" "}
        </>
      );
    });
    setResults(getCommuters);
  }, []);

  // Search Function
  const getSearchedCommuters = (e) => {
    e.preventDefault();
    const getCommuterNames = _.filter(commuters, (commute) =>
      commute.toLowerCase().includes(search.toLowerCase())
    );
    setResults(getCommuterNames);
  };
  return (
    <main>
      <form onKeyUp={getSearchedCommuters}>
        <input
          ref={searchRef}
          type="search"
          value={search}
          className={search === "" ? "redBorder" : "blackBorder"}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <>
        {_.keys(results).length > 0 ? (
          _.map(results, (result, index) => <p key={index}>{result}</p>)
        ) : (
          <p>Not Found</p>
        )}
      </>
    </main>
  );
};

export default HomePage;
