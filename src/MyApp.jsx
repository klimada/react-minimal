import React from 'react'
import Apptitle from './AppTitle.js'

const MyApp = () => (
  <div className="MyApp"> 
    <Apptitle/>
    <p1>Bundle size: 40700 bytes, Load time of the bundle: 439 ms, Last commit SHA1: 4DB7A670336A22881FB00AA5648787E20CDF7A19</p1> 
  </div>
  )

const generateArray = (n) => Array.from(new Array(n),(val,i) => 1 + i);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => Math.floor(Math.random() * 25 ) + 1);

export default MyApp