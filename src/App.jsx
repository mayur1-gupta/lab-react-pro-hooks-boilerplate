import React, { useCallback, useEffect, useState, useMemo } from 'react';
import './App.css';

// Do not change this
const LARGE_NUMBER = 1000000000;

function App() {
  const [counter, setCounter] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const [listData, setListData] = useState([]);

  // should not change the LOGIC inside this function - you can make changes to the function but logic should NOT change
  const delayFunctioning = () => {
    console.log("Delay Function Ran")
    for (let index = 0; index < LARGE_NUMBER; index++) { };
    return counter + 2;
  }

  // should not change the LOGIC inside this function - you can make changes to the function but logic should NOT change
  const testFunctioning = useCallback(() => {
    return [counter * 3, counter * 4];
  }, [counter]);

  // should not change this
  useEffect(() => {
    console.log("Callback Function was called")
  }, [testFunctioning]);

  useEffect(() => {
    setThemeName(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const handleToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  }

  const handleCounter = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  const handleList = () => {
    setListData(testFunctioning);
  }

  const themeStyleing = {
    backgroundColor: isDarkTheme ? "black" : "#ccc7c7",
  }

  return (
    <div className="page" style={themeStyleing}>
      <button onClick={handleToggle}>{themeName}</button>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Change Counter</button>
      <button onClick={handleList}>Show List</button>
      <h2>{useMemo(() => delayFunctioning(), [counter])}</h2>
      <div>
        {listData.map((item, index) => {
          return <h2 key={index}>{item}</h2>
        })}
      </div>
    </div>
  );
}

export default App;