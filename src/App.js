import React, {Component} from 'react'

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
//  return <div>!!!!</div>
  return <div>
  <Cat/>
  <Cat/>
  <Cat/>
  <Cat/>      
  </div>
}

const Cat = () => {
  return <p>nyaa</p>
}
export default App;
