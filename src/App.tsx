import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css';
import Produtos from './components/principal/Principal';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Produtos/>
      {/* <div className="min-h-[80vh]"></div> */}
      <Footer/>
    </BrowserRouter>


  )
}

export default App