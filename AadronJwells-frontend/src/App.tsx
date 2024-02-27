import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./styles/App.sass"
import Loader from './components/Loader'
const Home = React.lazy(()=> import('./pages/Home/Home'));
const Header = React.lazy(() => import('./components/Header'));

const App = () => {
  return (
   <BrowserRouter>
      <Suspense fallback={<Loader/>} >
        <Header/>
        <Routes>
            <Route  path="/" element={<Home/>} />
        </Routes>
      </Suspense>
   </BrowserRouter>
  )
}

export default App
