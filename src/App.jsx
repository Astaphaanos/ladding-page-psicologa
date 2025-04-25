import Servicos from "./components/sections/Servicos/Servicos";
import Header from "./components/layout/Header/Header";
import Home from "./components/sections/Home/Home";
import Sobre from "./components/sections/Sobre/Sobre";
import FuncionaAtendimento from "./components/sections/FuncionaAtendimento/FuncionaAtendimento";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <Header/>

      <Home/>

      <Sobre/>

      <Servicos/>

      <FuncionaAtendimento/>

      <Footer/>
    </>
  )
}

export default App
