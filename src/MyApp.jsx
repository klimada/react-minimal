import React from 'react'
import Apptitle from './AppTitle.js'

const arrayno1 = [2, 56, 23, 88, 17, 4];

const MyApp = () => (
  <div className="MyApp"> 
    <Apptitle/>
    <p1>Bundle size: 40700 bytes, Load time of the bundle: 439 ms, Last commit SHA1: 4DB7A670336A22881FB00AA5648787E20CDF7A19</p1> 
    { showGreaterThan15(arrayno1).map(x => <p>{x}</p>) }
  </div>
  )

const generateArray = (n) => Array.from(new Array(n),(val,i) => 1 + i);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => Math.floor(Math.random() * 25 ) + 1);
const showGreaterThan15 = (x) => x.filter((a) => a > 15);

export default MyApp