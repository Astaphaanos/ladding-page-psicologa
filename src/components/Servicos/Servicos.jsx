{/*Transformar em objeto*/}

const Banner = () => {
    return (
        <section className="h-auto flex flex-col justify-center items-center" id="servicos-oferecidos">
            <div>
                <h2 className="text-3xl font-bold text-[#494949] pt-20">Serviços Oferecidos</h2>
            </div>

            <div className="grid grid-cols-2 gap-16 pt-20 w-6xl text-center">
                <div className="bg-[#ececec] rounded-2xl shadow-lg p-10 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">   
                    <img width="100" height="100" src="https://img.icons8.com/dotty/100/businessman.png" alt="businessman" className="mb-10"/>                    
                    <h3 className="text-xl font-bold pb-4">Terapia Individual</h3>
                    <p className="text-[18px] pb-4">Atendimento personalizado para trabalhar questões emocionais e comportamentais.</p>
                    <span className="font-semibold">✅ Autoconhecimento | ✅ Redução da ansiedade</span>
                </div>

                <div className="bg-[#ececec] rounded-2xl shadow-lg p-10 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200">   
                    <img width="100" height="100" src="https://img.icons8.com/pastel-glyph/100/head-with-brain.png" alt="head-with-brain" className="mb-10"/>                    
                    <h3 className="text-xl font-bold pb-4">Diagnóstico de Transtornos Mentais</h3>
                    <p className="text-[18px] pb-4">Avaliação profissional para identificar e compreender transtornos mentais.</p>
                    <span className="font-semibold">✅ Clareza sobre sua saúde mental | ✅ Direcionamento para o tratamento adequado</span>
                </div>
            </div>

            <div className="flex justify-between items-center bg-[#e2e0e0] mt-20 w-full p-10 text-center">
                <div className="pr-8 w-3xs">
                    <h4 className="pb-2 font-semibold text-xl">Tudo online por videochamada</h4>
                    <p>No conforto da sua casa, se encaixando com sua rotina</p>
                </div>

                <div className="pr-10 w-3xs">
                    <h4 className="pb-2 font-semibold text-xl">Terapia Presencial</h4>
                    <p>Atendimento presencial em um ambiente acolhedor e confortável</p>
                </div>

                <div className="pr-10 w-3xs">
                    <h4  className="pb-2 font-semibold text-xl">Sigilo completo</h4>
                    <p>Garantia de total privacidade e confidencialidade em todas as sessões</p>
                </div>

                <div className="pr-10 w-3xs">
                    <h4 className="pb-2 font-semibold text-xl">Profissional certificada</h4>
                    <p>Psicóloga formada e certificação reconhecida</p>
                </div>
            </div>
        </section>
    )
}

export default Banner