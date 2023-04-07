import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from "./Components/coinInfor";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(0)
  const [filteredResults, setFilteredResults] = useState([]);
const [searchInput, setSearchInput] = useState("");
  useEffect(() => {

    const fetchAllCoinData = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/all/coinlist?&api_key=${API_KEY}`
      );
      const json = await response.json();
      setList(json);
    };
    fetchAllCoinData().catch(console.error);
  }, []);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    console.log(list.Data); 
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) => 
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };

  return (
  <div className="whole-page">
      <h1>My Crypto List</h1>

      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />

          <ul>

          {searchInput.length > 0
          ? // what happens if we have search input? what list do we use to display coins?     
         
          filteredResults.map((coin) => 
          list.Data[coin].PlatformType === "blockchain" ? 
          <CoinInfo
            image={list.Data[coin].ImageUrl}
            name={list.Data[coin].FullName}
            symbol={list.Data[coin].Symbol}
          />
          : null
      )
          : // what happens if we don't have search input? what list do we use to display coins?            


          list && Object.entries(list.Data).map(([coin]) => 
          // console.log(list.Data[coin])
          list.Data[coin].PlatformType === "blockchain" ? (
            <CoinInfo
            image={list.Data[coin].ImageUrl}
            name={list.Data[coin].FullName}
            symbol={list.Data[coin].Symbol}
            />
        ) : null
          )
          
          }
          </ul>
  </div>
  )
}

export default App