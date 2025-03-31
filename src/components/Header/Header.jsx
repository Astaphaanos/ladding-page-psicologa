

const Header = () => {
    return(
        <header className="flex justify-center p-6">
            <nav className="flex justify-between items-center">
                <div className="text-3xl font-bold pr-16 text-[#9e3438]">
                    <span>Thayse Oliveira</span>
                </div>

                <div>
                    <ul className="flex justify-between text-md text-neutral-700">
                        <li>
                            <a href="#sobre-mim" className="pr-8 hover:text-neutral-950">Sobre mim</a>
                        </li>
                        <li>
                            <a href="#servicos-oferecidos" className="pr-8 hover:text-neutral-950">Serviços</a>
                        </li>
                        <li>
                            <a href="#como-funciona-atendimento" className="pr-8 hover:text-neutral-950">Como funciona</a>
                        </li>
                        <li>
                            <a href="#contatos-info" className="pr-8 hover:text-neutral-950">Entre em Contato</a>
                        </li>
                        <li className="font-bold">
                            CRP- 02/29522
                        </li>
                    </ul>
                </div>
                <div>
                
                </div>
            </nav>
        </header>
    )
}

export default Header;