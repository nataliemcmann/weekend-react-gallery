import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  //make some useState
  const [pictures, setPictures] = useState([]);

  //make a useEffect to get initial array state
  useEffect(() => {
    getPictures();
  },[]);

  //make a get route to call on and pass down
  const getPictures = () => {
    axios.get('/gallery')
    .then((res) => {
      console.log('GET request successful', res.data);
      setPictures(res.data);
    }).catch((err) => {
      console.log('Error in GET request', err);
    })
  }

  //html to return 

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p> 
        {pictures.map(picture => (
          <div>
          <img src={picture.path} width="250" height="200"/> 
          </div>
        ))}
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
