import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Success from './Success.jsx'
import Fail from './Fail.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<App/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route path='/fail' element={<Fail/>}></Route>
  </Routes>
  </BrowserRouter>
)
