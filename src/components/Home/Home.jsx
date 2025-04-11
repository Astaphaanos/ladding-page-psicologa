import BtnWhats from "../BtnWhats/BtnWhats";

const Home = () => {
    return (
      <section className="h-screen w-full mx-auto flex justify-center items-center bg-gray-50 px-4">
        <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-6xl gap-8">
          {/* Text Content */}
          <div className="md:pr-10 w-full md:w-1/2 space-y-6 animate-fade-in order-2 md:order-1">
            <h1 className="font-bold text-2xl md:text-4xl text-gray-800 leading-tight lg:text-3xl">
              Atendimento psicológico online e presencial para{" "}
              <span className="text-red-800 decoration-2 underline-offset-4 animate-underline">
                infantojuvenil e adultos
              </span>
            </h1>
  
            <p className="text-gray-600 text-[16px]  sm:text-[18px] md:text-lg lg:text-lg">
              Atendimento presencial em Pesqueira-PE e online no Brasil todo
            </p>
  
            <div className="pt-2">
              <BtnWhats />
            </div>
          </div>
  
          {/* Image */}
          <div className="relative group order-1 md:order-2 sm:pb-6">
            <img
              src="/src/assets/site.jpeg"
              alt="Foto da Psicóloga"
              className="w-64 sm:w-80 md:w-96 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute -z-10 w-full h-full bg-red-800/10 rounded-3xl top-2 left-2 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Home;