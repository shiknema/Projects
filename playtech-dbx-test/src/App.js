import { useEffect, useState } from "react";
import "./App.css";
import testData from "./testData.json";
import { ReactComponent as Logo } from "./assets/melon.svg";

function App() {

  const sortedData = [];      //create empty array to store sorted data
  if (testData.length > 0) {
    for (let i = 0; i < testData.length; i++) {      //loop for outer json array
      for (let j = 0; j < testData[i].testData.length; j++) {      //loop for inner json array
        const data = testData[i].testData[j];
        data.sport.sportName = data.sport.sportName.toLowerCase();      //convert all sport names into the lowercase and store them to original palce
        sortedData.push(data);      //push all the shorted data into empty array
      }
    }
  }
  const [width, setWidth] = useState(window.innerWidth);      //intilize hook for set window size

  function handleWindowSizeChange() {     //set window's width 
    setWidth(window.innerWidth);
  }
  useEffect(() => {        //update window state after event listener
    window.addEventListener("resize", handleWindowSizeChange);    
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 375;

  return (
    <div>
      <div id="header">
        <Logo className="custom-melon" />   {/** add melon svg into the header */}
        <p><b>Play</b>tech <b>SPORTS</b></p>
      </div>
      <div id="page">
        {!isMobile && <div id="sideBar"></div>}    {/** if window width>375 then it will display json data decending order based on marketid with side bar(2)*/}
        <div id="content">
          {!isMobile && sortedData.sort((a, b) =>
            parseInt(a.market.marketId) > parseInt(b.market.marketId) ? -1 : 1)  
            .map((a, i) => {
              return (
                <div key={i.toString()} className="sport-event">
                  <p> MarketID: {a.market.marketId}</p>
                  <p> Sport: {a.sport.sportName}</p>
                  <p> SportID: {a.sport.eventId}</p>
                </div>
              );
            })} {/**  other wise display json data in assending order based on marketId with no side bar */}
          {isMobile && sortedData.sort((a, b) =>parseInt(a.market.marketId) > parseInt(b.market.marketId)? 1 : -1)
              .map((a, i) => {
                return (
                  <div key={i.toString()} className="sport-event">
                    <p> MarketID: {a.market.marketId}</p>
                    <p> Sport: {a.sport.sportName}</p>
                    <p> SportID: {a.sport.eventId}</p>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
