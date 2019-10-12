import React from 'react'
import Apptitle from './AppTitle.js'

const arrayno1 = [2, 56, 23, 88, 17, 4];
const arrayno2 = [2, 5, 8, 10];

const MyApp = () => (
  <div className="MyApp"> 
    <Apptitle/>
    <p>Bundle size: 40700 bytes, Load time of the bundle: 439 ms, Last commit SHA1: 4DB7A670336A22881FB00AA5648787E20CDF7A19</p> 
  </div>
  )

const generateArray = (n) => Array.from(new Array(n),(val,i) => 1 + i);
const generateRandomArray = (n) => Array.from(new Array(n), (val) => Math.floor(Math.random() * 25 ) + 1);
const showGreaterThan15 = (x) => x.filter((a) => a > 15);
const squareArray = (x) => x.map((a) => Math.sqrt(a));

{console.log("exercise 2")}
{console.log(generateArray(5))}
{console.log("exercise 3")}
{console.log(generateRandomArray(5))}
{console.log("exercise 4")}
{console.log(showGreaterThan15(arrayno1))}
{console.log("exercise 5")}
{console.log(squareArray(arrayno2))}

export default MyApp

