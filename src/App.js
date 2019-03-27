import React from 'react';

const App = () => {
  const profiles = [
    {name: "taro", age: 10},
    {name: "hanako", age: 4},
    {name: "kenta", age: 40}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  console.log(props);
  return <div>{props.key}: Hi, I am {props.name}, my age is {props.age}!</div>
}

export default App;
