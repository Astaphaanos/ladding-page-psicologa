const Header = () => {
    return(
        <header className="pt-4 h-2">
            <nav className="flex justify-around items-center md:justify-between lg:justify-evenly xl:justify-evenly">
                <div className="text-red-800 font-bold text-3xl md:pl-4">
                    <span>Thayse Oliveira</span>
                </div>

                <div className="flex items-center">
                    <ul className="hidden md:flex md:text-sm md:w-full lg:text-[16px]">
                        <li className="md:pr-4 lg:pr-6 hover:text-gray-950">
                            <a href="#sobre-mim" className="">Sobre mim</a>
                        </li>
                        <li className="md:pr-4 lg:pr-6 hover:text-gray-950">
                            <a href="#servicos-oferecidos" className="">Serviços</a>
                        </li>
                        <li className="md:pr-4 lg:pr-6 hover:text-gray-950">
                            <a href="#como-funciona-atendimento" className="">Como funciona</a>
                        </li>
                        <li className="md:pr-4 lg:pr-6 hover:text-gray-950">
                            <a href="#contatos-info" className="">Entre em Contato</a>
                        </li>
                    </ul>
                    <span className=" text-gray-700 font-bold md:text-sm lg:pl-6">
                        CRP-02/29522
                    </span>
                </div>
                <div>
                
                </div>
            </nav>
        </header>
    )
}

export default Header;