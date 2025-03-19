import Servicos from "./components/Servicos/Servicos";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sobre from "./components/Sobre/sobre";
import FuncionaAtendimento from "./components/FuncionaAtendimento/FuncionaAtendimento";
import Footer from "./components/Footer/Footer";

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
