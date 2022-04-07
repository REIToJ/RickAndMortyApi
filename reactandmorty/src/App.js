import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import History from './Pages/History';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <div style={{background: 'rgb(57, 64, 70)'}} className="div">
    <Router>
      <div  className="App">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/:id" element={<CardDetails/>}/>
      </Routes>
    </Router>
    </div>
  )
}

const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [genderFilter, setGenderFilter] = useState("");
  let [speciesFilter, setSpeciesFilter] = useState("");
  let [statusFilter, setStatusFilter] = useState("");
  let [locationFilter, setLocationFilter] = useState("");
  let [typeFilter, setTypeFilter] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;
  let [items, setItems] = useState([])
  let ids=[]
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${genderFilter}&species=${speciesFilter}&status=${statusFilter}&type=${typeFilter}`;

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data)
    })()
    console.log(pageNumber)
    console.log(api)
  },[api] )

  return (
    <div style={{background: 'rgb(57, 64, 70)'}} className="App">

      

      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
              <Filters setGenderFilter={setGenderFilter} setStatusFilter={setStatusFilter} setSpeciesFilter={setSpeciesFilter} setPageNumber={setPageNumber} setLocationFilter={setLocationFilter} setTypeFilter={setTypeFilter}/>
              <Cards page="/" results={results} items={items} setItems={setItems} ids={ids}/>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>



  );
}

export default App;
