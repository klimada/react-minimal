import React from 'react'
import Apptitle from './AppTitle.js'

const arrayno1 = [2, 56, 23, 88, 17, 4];
const arrayno2 = [2, 5, 8, 10];

const MyApp = () => (
  <div className="MyApp"> 
    <Apptitle/>
    <p1>Bundle size: 40700 bytes, Load time of the bundle: 439 ms, Last commit SHA1: 4DB7A670336A22881FB00AA5648787E20CDF7A19</p1> 
    <h2>Exercise 2</h2>
    <p2>{ generateArray(5).map(x => <li>{x}</li>) }</p2>
    <h2>Exercise 3</h2>
    <p2>{ generateRandomArray(5).map(x => <li>{x}</li>) }</p2>
    <h2>Exercise 4</h2>
    <p2>{ showGreaterThan15(arrayno1).map(x => <li>{x}</li>) }</p2>
    <h2>Exercise 5</h2>
    <p3>{ squareArray(arrayno2).map(x => <li>{x}</li>) }</p3>
  </div>
  )

const generateArray = (n) => Array.from(new Array(n),(val,i) => 1 + i);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => Math.floor(Math.random() * 25 ) + 1);
const showGreaterThan15 = (x) => x.filter((a) => a > 15);
const squareArray = (x) => x.map((a) => Math.sqrt(a));

export default MyApp