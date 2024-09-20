import { useState } from "react";

function App() {
  
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function reset() {
    setBill('');
    setTip1(0);
    setTip2(0);
  }
  return (
    <div className="App">
      <Total bill={bill} setBill={setBill} onChange={reset } />
      <Tip tip={"How did you like the service ?"} tip1={tip1} setTip1={setTip1 } />
      <Tip tip={"How did your freind like the service ?"}  tip1={tip2} setTip1={setTip2 } />
      <p>Total Amount to Pay is <Show bill={bill} tip1={tip1} tip2={ tip2} /> </p>
      <button onClick={reset}>Reset</button>
    </div>
  ); 
}


function Total({bill,setBill}) {
  

  return <div>
    <p>How much was the bill?   <input type="number" value={bill} onChange={(et) => setBill(Number(et.target.value))} /></p> 
    
  </div>
}

function Tip({ tip, tip1, setTip1 }) {
  
  return <div>
    <p>{tip} <select name="select" id="select" onChange={(e)=>setTip1(Number(e.target.value))}>
      <option value={0}>Dissatisfied(0%)</option>
      <option value={5}>It was Okey(5%)</option>
      <option value={10}>It was Good(10%)</option>
      <option value={20}>Absolutely Amazing (20%)</option>

    </select></p>
   
   </div>
}

function Show({ bill, tip1, tip2 }) {
  const ptip1 = Math.round((bill / 100) * tip1);
  const ptip2 =Math.round( (bill / 100) * tip2);

  var t = bill + ptip1 +ptip2;
  return <div>
    <h5>{t}$({ptip1 }$ + {ptip2 }$)</h5> 
   </div>
}
export default App;
