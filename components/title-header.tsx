import React from "react";

export const TitleHeader: React.FC = (props) => {
    const cn = props.children ? "h-12 md:h-24" : "h-6 md:h-12";
    return (
        <header className="gradient mb-5 text-center">
            <div className={`flex ${cn}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="w-full"
                >
                    <path
                        fill="#12161d"
                        fillOpacity="1"
                        d="M0,192L60,181.3C120,171,240,149,360,138.7C480,128,600,128,720,138.7C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                </svg>
            </div>
            {props.children && (
                <div className="container mt-8 mb-10">{props.children}</div>
            )}
            <div className={`flex ${cn}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    className="w-full"
                >
                    <path
                        fill="#12161d"
                        fillOpacity="1"
                        d="M0,128L60,144C120,160,240,192,360,176C480,160,600,96,720,74.7C840,53,960,75,1080,101.3C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </header>
    );
};
