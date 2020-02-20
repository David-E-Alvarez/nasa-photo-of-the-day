import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./components/Title";
import "./App.css";

function App() {
  //state
  const [nasaData, setNasaData] = useState({})
  //console.log("nasaData: ", nasaData);//empty object
  //console.log("setNasaData: ", setNasaData);//dispatchAction
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=Cl7sU7MLplixR4dq9wh8pF2STS13efeewiSA7V7m")
      .then(response => {
        console.log("response.data: ", response.data);
        setNasaData(response.data);
      })
      .catch(error =>{
        console.log("Data was not returned,", error)
      })
  },[])
  return (
    <div className="App">
      <Title title={nasaData.title}/>
    </div>
  );
}

export default App;




