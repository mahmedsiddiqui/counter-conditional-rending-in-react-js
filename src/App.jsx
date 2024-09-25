import React, { useState } from 'react';






const App = () => {


  const add = () => {
    setCounter(counter + 1)
  }
  const dec = () => {
    setCounter(counter - 1)
  }
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>hello world</h1>
      <button onClick={add}  >increase</button>
      <button onClick={dec}  >decrease</button>
      <h1> {counter}</h1>
       {   counter < 10 ? <h3>kid</h3>:counter < 15 ||counter < 25  ? <h3>admission available:-free</h3> :counter > 25 ? <h3>admission available with RS:-1000</h3> : "" }
     

    </div>
   
  );
};

export default App;
