// import './App.css';
// import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import { Haa } from './doms/haa';
// import { Home } from './doms/home';
// import { Profile } from './doms/profile';
// import { QueryClient , QueryClientProvider } from 'react-query'; 
// import { Menu } from './doms/menu';
// import { createContext, useState } from 'react';


// export const AppContext = createContext() 
// const App = () =>{
//   const [username , setusername] = useState("")
//   return(
//     <div>
//       <AppContext.Provider value={{username , setusername}}>
//       <Router>
//         <Haa/>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/profile/' element={<Profile/>}/>
//           <Route path='/menu' element={<Menu/>}/>
//         </Routes>
//       </Router>
//       </AppContext.Provider>
//     </div>
//   )
// }

// import React, { useState } from "react";

// // import "./styles.css";

// function App() {

//   const list = [
//     "Banana",
//     "Apple",
//     "Orange",
//     "Mango",
//     "Pineapple",
//     "Watermelon"
//   ];

//   const [filterList, setFilterList] = useState(list);

//   const handleSearch = (event) => {

//     if (event.target.value === "") {
//       setFilterList(list);
//       return;
//     }
//     const filteredValues = list.filter(
//       (item) =>
//         item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//     );
//     setFilterList(filteredValues);
//   };
//   return (
//     <div className="app">
//       <div>
//         Search: <input name="query" type="text" onChange={handleSearch} />
//       </div>
//       {filterList &&
//         filterList.map((item, index) => (
//           <div key={index}>{item}</div> //Display each item
//         ))}
//     </div>
//   );
// }

// import './App.css';
// const App = () => {
//   const list = [
//     "Mumtaas",
//     "Abdiaziiz",
//     "Hassan",
//     "Anwar",
//     "Hamze",
//     "Ayuub",
//     "Liiban"
//   ]
//   const [filter , setfilter] = useState(list)
//   const Handle = (event) => {
//     if (event.target.value === "")
//     {
//       setfilter(list)
//       return
//     }
//     const viewhandlde = list.filter(
//       (item)=>
//       item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1 
//     )
//     setfilter(viewhandlde)
//   }
//   return(
//     <div className='app'>
//       <div>
//         Search: <input placeholder='Search....' onChange={Handle}/>
//       </div>
//       {filter.map((item , index)=>(
//         <div index = {index}>{item}</div>
//       ))}
//     </div>
//   )
// }


// data,
// error,
// failureCount,
// isError,
// isFetchedAfterMount,
// isFetching,
// isIdle,
// isLoading,
// isPreviousData,
// isStale,
// isSuccess,
// refetch,
// remove,
// status,

//  


// import React, { useState, useEffect } from 'react';

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   return (
//     <div>
//       <p>Current Time:</p>
//       <p>{hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
//     </div>
//   );
// }

// function App() {
//     const currentTime = new Date();
  
//     return (
//       <div>
//         <p>The current time is: {currentTime.toLocaleTimeString()}</p>
//       </div>
//     );
//   }


import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Headline from './component/Headline';
import Food from './component/Food';

const App = () => {
  return (
    <div>
 <Navbar/>
 <Hero/>
 <Headline/>
 <Food/>
  </div>
  )
}

export default App;

