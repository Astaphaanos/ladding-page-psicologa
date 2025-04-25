import AnimatedSection from "../../common/AnimatedSection/AnimatedSection";


const Sobre = () => {
    return (
        <AnimatedSection >
        <section className="bg-[#9e3438] text-white p-10 h-auto" id="sobre-mim">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold p-2">Sobre Mim</h2>
                <h3 className="text-xl font-medium pb-6">Psicóloga credenciada CRP- 02/29522</h3>
                <p className="w-full text-justify text-[18px] sm:w-full md:w-[600px] lg:w-3xl">
                    Psicóloga Clínica formada em 2023, com pós-graduação em Neuropsicologia e especialização em Análise do Comportamento Aplicada (ABA). Atuo no atendimento de adolescentes e adultos, utilizando a abordagem da Terapia Cognitivo-Comportamental (TCC) para promover mudanças significativas e duradouras. <br/>
                    Meu trabalho é guiado pela missão de trazer consciência e autoconhecimento aos meus pacientes, ajudando-os a compreender suas emoções, pensamentos e comportamentos. Acredito que a terapia é um caminho transformador, onde cada indivíduo pode desenvolver ferramentas para enfrentar desafios, superar dificuldades e alcançar uma vida mais equilibrada e autêntica. <br/>
                    Meu objetivo é oferecer um espaço seguro, acolhedor e sem julgamentos, onde você possa se reconectar consigo mesmo, fortalecer sua saúde mental e construir uma relação mais saudável com a vida.
                    Seja para lidar com ansiedade, melhorar relacionamentos ou simplesmente se conhecer melhor, estou aqui para caminhar ao seu lado nessa jornada de transformação.
                </p>
            </div>
        </section>
    </AnimatedSection>
    )
}

export default Sobre;