import React from 'react';

//class App extends Component {
//  render() {
//    return (
//      <React.Fragment>
//      <h1>hello</h1>
//      <label htmlFor='bar'>bar</label>
//      <input type='text' onChange={() => {console.log("I am clicked")}} />
//      </React.Fragment>
//      )
//  }
//}

const App = () => {
  return (
    <div>
      <Cat />  
      <Cat />  
      <Cat />  
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
