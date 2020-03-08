import React, { useEffect, useState } from 'react';
import './App.css';
import {Filterby} from "./UtilityFunctions"
import Card from "./Card";

const URL = "http://starlord.hackerearth.com/TopRamen"
function App() {
  const [data, setLoadData] = useState([]);
  const [optionVal, setOption]=useState("All");
  const [changed,setChanged]=useState(false);
  const [changedData,setChangedData]=useState([]);
  const optionValues = ["Ranking","Country", "Brand", "Variety","Stars"]
  const [searchValue, setsearchValue] = useState("");
  useEffect(() => {
     (async ()=>{
      const data = await fetch(URL).then(data => data.json()).catch(console.error);
      setLoadData(Filterby(data, "Top Ten"));
    })();
    
  }, []);
  const selectChange = (e) => {
      setOption(e.target.value);
      let newData=[];
      if(e.target.value!=="Ranking"){
       let newData = Filterby(data, e.target.value)
        setChangedData(newData) 
        setChanged(true);
      }else{
        setChangedData(data)
        setChanged(false);
      }
     
  }
  const inputChange =(e)=>{
    setsearchValue(e.target.value)
    let selection=optionVal==="Ranking"?"Country":optionVal
    setChangedData(data.filter(value=>value[selection].includes(e.target.value))) 
  } 
  const makeRestaurents = (val, index) => {
    return (
      <Card data={val} key={val.Brand + index} />
    )
  }
  return (
    <div className="App">
      <div className="search">
        <div className="searchFilter">
          <label>
            Group By
          <select value={optionVal} onChange={selectChange}>
              {optionValues.map((val, index) => <option value={val} key={val + index} >{val}</option>)}
            </select>
          </label>
        </div>
        <div className="searchBox">
          <input className="searcBox" placeholder="Search " value={searchValue} onChange={inputChange}/>

        </div>
      </div>
      <div id="restaurent-container">
        {
          changed?changedData.map(makeRestaurents):data.map(makeRestaurents)
        }
      </div>
    </div>
  );
}

export default App;
