import Create from "./components/Create";
import Home from "./components/Home"; 
import {BrowserRouter, Routes,Route } from 'react-router-dom' ;
import Update from "./components/Update";
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
   
    
    </div>
  
  )
}

export default App