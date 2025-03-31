import BtnWhats from "../BtnWhats/BtnWhats";


const FuncionaAtendimento = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen text-center" id="como-funciona-atendimento">
            <div>
                <h2 className="font-bold text-4xl text-[#494949] pb-4">Como funciona o atendimento?</h2>
                <p className="text-[18px] text-[#494949]">Conheça as etapas do processo</p>
            </div>

            <div className="grid grid-cols-3 gap-10 pt-20 text-white w-6xl">
                <div className="bg-gradient-to-b from-[#9e3438] to-[#c44a4e] p-7 rounded-2xl font-semibold cursor-pointer">
                    <h3>Você entra em contato por WhatsApp</h3>
                </div>

                <div className="bg-gradient-to-b from-[#9e3438] to-[#c44a4e] p-7 rounded-2xl font-semibold cursor-pointer">
                    <h3>Contará sua demanda e irei te explicar como funciona o processo terapêutico</h3>
                </div>

                <div className="bg-gradient-to-b from-[#9e3438] to-[#c44a4e] p-7 rounded-2xl font-semibold cursor-pointer">
                    <h3>As sessões serão semanais com duração de 50 minutos</h3>
                </div>
            </div>

            <div>
                <BtnWhats/>
            </div>
        </section>
    )
}

export default FuncionaAtendimento;