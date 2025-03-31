import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import ShowMapa from "../ConsultorioLocalizacao/ShowMapa";

const Footer = () => {
  return (
    <footer className="h-auto p-10 bg-gradient-to-r from-[#6e2427] via-[#9e3438] to-[#c44a4e] text-white" id='contatos-info'>
      <div className="flex items-center justify-between ">
        <div className="text-3xl font-bold pr-16 w-[380px]">
          <img src="/src/assets/logo-psi.png" alt="Logo de Thayse Oliveira" />
        </div>

        <div className="flex flex-col items-center">
          <div className="pb-16 text-[18px]">
            <ul className="flex justify-between">
              <li>
                <a href="#sobre-mim" className="pr-24 hover:underline">
                  Sobre mim
                </a>
              </li>
              <li>
                <a href="#como-funciona-atendimento" className="pr-24 hover:underline">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#servicos-oferecidos" className="pr-24 hover:underline">
                  Serviços Oferecidos
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center pr-24">
            <div className="flex items-center pr-12">
              <FaWhatsapp />
              <p className="pl-2">WhatsApp: (87) 998186712</p>
            </div>
            <div className="flex items-center">
              <FaInstagram />
              <p className="pl-2">
                <a href="https://www.instagram.com/thaysepsi2/" target="_blank">@thaysepsi</a> {/*Colocar o link do instagram */}
              </p>
            </div>
          </div>
        </div>

        <div>
          <ShowMapa />

          {/* Endereço e Link */}
          <div className="mt-4 text-center font-semibold">
            <p className="mb-1">Avenida Ézio Araújo, 149</p>
            <p className="mb-4">Centro | Pesqueira-PE</p>
          </div>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t w-full border-gray-200 text-center text-sm">
        <p>
          © 2025 Todos os direitos reservado. Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/anna-clara-amorim/"
            target="_blank"
            className="font-semibold hover:underline"
          >
            {" "}
            Clara Amorim
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
