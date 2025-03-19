import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

//Arrumar o footer

const Footer = () => {
  return (
    <footer className="flex items-center h-48 p-10 bg-gradient-to-r from-[#6e2427] via-[#9e3438] to-[#c44a4e] text-white">
      <div className="text-3xl font-bold pr-16">
        <span className="pr-20">Thayse Oliveira</span>
      </div>

      <div>
        <div className="pt-10">
            <ul className="flex items-center text-[#fefefe] list-none">
                <li className="pr-20">
                  <a href="">
                    Sobre mim
                  </a>
                </li>
                <li className="pr-20">
                  <a href="">
                    Como funciona
                  </a>
                </li>
                <li className="pr-20">
                  <a href="">
                    Entre em Contato
                  </a>
                </li>
            </ul>
        </div>

        <div className="flex items-center pt-10">
        <div  className="flex items-center">
                <FaWhatsapp />
                <p className="pl-1">Whatsapp: (87) 998186712</p>
            </div>

            <div  className="flex items-center pl-5">
                <FaInstagram />
                <p className="pl-1">@thaysepsi</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
