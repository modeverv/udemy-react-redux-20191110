import React, {Component} from 'react'
import { tsPropertySignature } from '@babel/types'

/*
class App extends Component {
  render(){
    //return <div>Hello world</div>;
    const greeting = "aaa"
    const dom = <h1>hi!!!</h1>
    const dom2 = <h1>{greeting}</h1>    
    const dom3 = <h1 className="foo">{greeting}</h1>        
    const ipt = <input id="a" type="text" onClick={()=>{console.log("aaaa")}}/>
    const dom4 = <div>
      <label htmlFor="a">laaaa</label>    
      {ipt}
    </div>
    const dom5 = <React.Fragment>
      <label htmlFor="a">laaaa</label>    
      {ipt}
    </React.Fragment>

    //return <h1>Hello world</h1>;    
    //return dom
    //return dom2
    return dom5
  }
}
*/
const App = () => {
  const profiles = [
    {name: "Jiro1", age: 1},
    {name: "Jiro2", age: 2},
    {name: "Jiro3"},    
  ]
//  return <div>!!!!</div>
  return <div>
   <User name={"Taro1"} age={1}/>
   <User name={"Taro2"} age={2}/>
   <User name={"Taro3"} age={3}/>
   {
     profiles.map((p,index) => {
       return <User name={p.name} age={p.age} key={index}/>
     })
   }
  </div>
}
// 子供へ向かってデータを送り込んでいく
const User = (props) => {
  return <p>I'm {props.name}, {props.age} yeas old.</p>
}

User.defaultProps = {
  age: 100
}
export default App;
