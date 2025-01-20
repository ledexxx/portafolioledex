import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";

const PortfolioPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
        
            <div className="flex flex-col justify-center h-full md:bottom-12 pb-24"> 
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
