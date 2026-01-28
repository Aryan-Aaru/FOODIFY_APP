// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import MyCart from './Pages/MyCart'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <div> */}
//         {/* <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//       <MyCart/>
//     </>
//   )
// }

import {BrowserRouter , Routes, Route } from "react-router-dom";
import MyCart from "./Pages/MyCart";
import Restaurent from "./Pages/Restaurent";
import OrderConfirm from "./Pages/OrderConfirm";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/restaurent" element={<Restaurent />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/order-confirm" element={<OrderConfirm />} />
          </Routes>
    </BrowserRouter>
  );
};

export default App;
