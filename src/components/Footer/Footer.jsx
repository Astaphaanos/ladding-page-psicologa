import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import ShowMapa from "../ConsultorioLocalizacao/ShowMapa";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
    className="h-auto p-10 bg-gradient-to-r from-[#6e2427] via-[#9e3438] to-[#c44a4e] text-white" id="contatos-info">
      
      <div className="block">
        <div className="max-w-6xl mx-auto flex justify-between items-center md:pl-6 md:pr-6 ">
          {/* Links de navegação */}
          <div className="space-y-4 lg:pl-6">
            <ul className="cursor-pointer space-y-3">
              <li className="pb-2 hover:underline"><a href="#sobre-mim">Sobre mim</a></li>
              <li className="pb-2 hover:underline"><a href="#servicos-oferecidos">Serviços</a></li>
              <li className="pb-2 hover:underline"><a href="#como-funciona-atendimento">Como Funciona</a></li>
              <li className="pb-2 hover:underline"><a href="#contatos-info">Entre em contato</a></li>
            </ul>
          </div>
          
          {/*Mapa*/}
          <div className="max-w-md lg:pr-6">
            <h3 className="font-bold text-lg border-b border-white/20 pb-2 mb-4">Localização</h3>
            <div>
              <ShowMapa />
            </div>
            <p className="mt-2 text-sm flex items-center gap-1">
               Av. Ézio Araújo, 399 - Centro
            </p>
          </div>
        </div>
        {/*Redes Sociais*/}
        <div className="space-y-4 pt-6">
            <div className="flex justify-end pb-3">
              <a
                href="https://wa.me/5587998186712?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
              >
                <FaWhatsapp className="text-xl" />
              </a>
        
              <a
                href="https://www.instagram.com/thaysepsi2/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        {/*Direitos Reservados e Criadora da Página*/}
        <div className=" mt-1 pt-3 border-t border-white/20 flex flex-col sm:flex-row md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2025 Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/anna-clara-amorim/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Clara Amorim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
