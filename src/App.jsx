import './styles/index.css'
import { NavBar } from "./components/navbar/NavBar";
import { CustomBanner } from './components/banners/CustomBanner';


import { Gimoji } from './Gimoji';


function App() {


  return (
    <>
      <NavBar />
      <CustomBanner />
      <Gimoji />
    </>
  )
}

export default App
