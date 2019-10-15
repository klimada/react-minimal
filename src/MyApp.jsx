import React from 'react'
import Apptitle from './AppTitle.js'

const arrayno1 = [2, 56, 23, 88, 17, 4];
const arrayno2 = [2, 5, 8, 10];

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myData: (data.map(x => x.students)).flat(),
      valueA: 0,
      valueB: 0,
      abArray: [],
    };
    this.All = this.All.bind(this);
    this.Sort = this.Sort.bind(this);
    this.Old = this.Old.bind(this);
    //LAB2
    this.aChange = this.aChange.bind(this);
    this.bChange = this.bChange.bind(this);
 
  }
  
  All() {
    this.setState({ myData: (data.map(x => x.students)).flat() });
  }
  
  Sort() {
    this.setState({ myData: (data.map(x => x.students)).flat().sort((a, b) => a.name.localeCompare(b.name))});
  }
  
  Old() {
    this.setState({ myData: (data.filter(x => x.active).map(x => x.students)).flat().filter(a => a.age > 20) });
  }
  //LAB2

  aChange(event) {
    const valueA = Number(event.target.value);
    const abArray = generateABArray(valueA,this.state.valueB)
    this.setState({valueA,abArray});
    console.log('Value changed A:' + event.target.value);
  }
  bChange(event) {
    const valueB = Number(event.target.value);
    const abArray = generateABArray(this.state.valueA,valueB);
    this.setState({valueB,abArray});
    console.log('Value changed B:' + event.target.value);
  }
  
  render() {
    const { myData,valueA,valueB,abArray} = this.state;  
    return (
      <div className="MyApp"> 
       <Apptitle/>
      <p>Bundle size: 40700 bytes, Load time of the bundle: 439 ms, Last commit SHA1: 4DB7A670336A22881FB00AA5648787E20CDF7A19</p>    
      <button id="buttonAll" onClick={this.All}>All students</button>
      <button id="buttonSort" onClick={this.Sort}>Sort students</button>
      <button id="buttonOld" onClick={this.Old}>Old students</button>

      <ul>{ myData.map(x => <li key={x.name}>{x.name}</li>)}</ul>
      <form >
        <label>
          A:
          <input type="number" value={this.state.valueA} onChange={this.aChange} />
        </label>
        <label>
          B:
          <input type="number" value={this.state.valueB} onChange={this.bChange} />
        </label>
      </form>
      <ul>{ abArray.map(x => <li key={x}>{x}</li>)}</ul>
      </div>
    );
  }
}

const generateArray = (n) => Array.from(new Array(n),(val,i) => 1 + i);
const generateABArray = (a,b) => 
{
  if(b <= a || a <=0)
    return [];
  return Array.from(Array(b - a + 1),(val,i) => a + i);
}
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

var data =
[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta Poznańska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

export default MyApp

