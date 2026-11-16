
import { dataPortfolio } from "@/data";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioClient = () => {
    return (
        <ContainerPage>
            <TransitionPage />

            <div className="flex flex-col justify-center h-full md:bottom-12 mt-12">
                <h1 className="text-4xl leading-tight text-center md:text-6xl md:mb-5">
                    Mis{" "}
                    <span className="font-bold text-secondary">proyectos</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 text-center">
                    Explora mi portafolio de proyectos donde combino diseño y tecnología
                    para crear experiencias digitales únicas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
};

export default PortfolioClient;
