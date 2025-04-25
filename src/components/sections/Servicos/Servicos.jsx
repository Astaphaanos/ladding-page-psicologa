import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedSection from '../../common/AnimatedSection/AnimatedSection';

// Configurações do carrossel
const settings = {
  dots: false, // Mostra os pontos de navegação
  infinite: true, // Loop infinito
  speed: 500, // Velocidade da transição (ms)
  slidesToShow: 3, // Número de slides visíveis
  slidesToScroll: 1, // Número de slides por scroll
  autoplay: true, // Rola automaticamente
  autoplaySpeed: 3000, // Intervalo (ms)
  pauseOnHover: true, // Pausa ao passar o mouse
  responsive: [ //Responsividade
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
  ],
};

const carouselItems = [
  {
    title: "Online por videochamada",
    description: "No conforto da sua casa, se encaixando com sua rotina",
  },
  {
    title: "Terapia Presencial",
    description:
      "Atendimento presencial em um ambiente acolhedor e confortável",
  },
  {
    title: "Sigilo completo",
    description:
      "Garantia de total privacidade e confidencialidade em todas as sessões",
  },
  {
    title: "Profissional certificada",
    description: "Psicóloga formada e certificação reconhecida",
  },
];

const servicesBanner = [
    {
    id: 1,
    title: "Terapia Individual",
    description: "Atendimento personalizado para trabalhar questões emocionais e comportamentais.",
    benefits: "✅ Autoconhecimento | ✅ Redução da ansiedade",
    icon: "https://img.icons8.com/dotty/100/businessman.png",
    alt: "Ícone de terapia individual",
    className: "bg-[#ececec] rounded-2xl shadow-lg p-10 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
  },
  // Adicione mais serviços conforme necessário
  {
    id: 2,
    title: "Diagnóstico de Transtornos Mentais",
    description: "Avaliação profissional para identificar e compreender transtornos mentais",
    benefits: "✅ Clareza sobre sua saúde mental | ✅ Direcionamento para o tratamento adequado",
    icon: "https://img.icons8.com/pastel-glyph/100/head-with-brain.png",
    alt: "Ícone de cérebro",
    className: "bg-[#ececec] rounded-2xl shadow-lg p-10 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
  }
]

const Banner = () => {
  return (
    <AnimatedSection type="default" delay={0.3}>
    <section
      className="h-auto flex flex-col justify-center items-center"
      id="servicos-oferecidos"
    >
      <div>
        <h2 className="text-3xl font-bold text-[#494949] pt-20">
          Serviços Oferecidos
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-16 pt-20 w-[350px] text-center sm:w-[500px] lg:grid-cols-2 lg:w-4xl xl:w-5xl 2xl:w-6xl">
      {servicesBanner.map((servicesBanner) => (
        <div key={servicesBanner.id} className={servicesBanner.className}>
          <img
            width="100"
            height="100"
            src={servicesBanner.icon}
            alt={servicesBanner.alt}
            className="mb-10"
          />
          <h3 className="text-xl font-bold pb-4 sm:text-[22px] md:text-2xl lg:text-2xl">
            {servicesBanner.title}
          </h3>
          <p className="text-[16px] pb-4 lg:text-md xl:text-lg">
            {servicesBanner.description}
          </p>
          <span className="font-semibold text-sm lg:text-md">
            {servicesBanner.benefits}
          </span>
        </div>
      ))}
    </div>

      <div className="bg-[#e2e0e0e8] mt-20 w-full p-10 text-center">
        <Slider {...settings}>
          {carouselItems.map((carouselItems, index) => (
            <div key={index} className="px-4 outline-none">
              {" "}
              {/* outline-none remove borda ao focar */}
              <div className=" p-6 rounded-lg h-full">
                <h4 className="pb-2 font-semibold text-xl text-gray-800">
                  {carouselItems.title}
                </h4>
                <p className="text-gray-600">{carouselItems.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Banner;
