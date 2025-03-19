import BtnWhats from "../BtnWhats/BtnWhats";

const Home = () => {
    return(
        <section className="h-screen w-full mx-auto flex justify-center items-center">
            <div className="flex items-center justify-evenly">
                <div className="pr-20 w-1/2">
                    <h1 className="font-bold text-4xl text-[#494949]">
                        Atendimento psicológico online e presencial para <span className="text-[#9e3438]">infantojuvenil e adultos</span>
                    </h1>
                    <p className="pt-3 text-[#494949]">
                        Atendimento presencial em Pesqueira-PE e online no Brasil todo
                    </p>
                    <BtnWhats/>
                </div>
                <div>
                    <img src="/src/assets/site.jpeg" alt="Foto da Psicólogo" className="w-96 rounded-3xl"/>
                </div>
            </div>
        </section>
    )
}

export default Home;