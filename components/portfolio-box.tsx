import Image from "next/image";
import { Github, ExternalLink } from 'lucide-react';
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
        description: string; // Agrega description si es necesario
    };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { data } = props;
    const { id, title, image, urlDemo, urlGithub, description } = data;

    return (
        <div
            key={id}
            className="bg-blue-900/50 rounded-xl overflow-hidden group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
        >
            <div className="relative overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                {description && (
                    <p className="text-gray-300 mb-4">{description}</p>
                )}
                <div className="flex gap-3">
                    <Link
                        href={urlGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-950/50 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
                    >
                        <Github className="w-4 h-4" />
                        Github
                    </Link>

                    <Link
                        href={urlDemo}
                        target="_blank"
                        className="px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live demo
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioBox;
