import { FaWhatsapp } from "react-icons/fa";

const BtnWhats =() => {
    return(
        <div>
            <button className=" flex items-center bg-[#25D366] rounded-2xl p-4 cursor-pointer mt-16 animate-bounce-in hover:scale-105 transition-transform duration-200
            ">
                <FaWhatsapp color="white" fontSize={30}/>
                <a href="https://wa.me/5587998186712?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." target="-blank" className="pl-2 text-md font-bold text-white ">Entre em contato conosco</a>
            </button>
        </div>
    )
}

export default BtnWhats