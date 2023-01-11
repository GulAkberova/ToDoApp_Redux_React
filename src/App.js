import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
const Header =lazy(()=>import("./components/Header"))
const Add= lazy(()=>import("./components/Add"))
const List=lazy(()=>import('./components/List'))
const About=lazy(()=>import('./components/About'))

function App() {
  return (
    <>
<Header/>
<Routes>
  <Route path='/' element={<Suspense><Add/></Suspense>}/>
  <Route path='/list' element={<Suspense><List/></Suspense>}/>
  <Route path='/about' element={<Suspense><About/></Suspense>}/>
</Routes>
   
    </>
  );
}

export default App;
