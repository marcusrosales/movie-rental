import React from "react";
import { useEffect } from "react";
import {fetchMovies} from './ApiSource'


function App() { 
  const list = ["test",'eggs','helloThere']

  useEffect(()=>{console.log('test')})


  return(<>
  <h1>Top 3 Movies</h1>
  <img></img>
  </>)}


export default App;