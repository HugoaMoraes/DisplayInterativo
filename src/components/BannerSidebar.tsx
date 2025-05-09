import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Banner } from "../types";

interface BannerSidebarProps {
  banners: Banner[];
}

const BannerSidebar: React.FC<BannerSidebarProps> = ({ banners }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentBannerIndex((current) => (current + 1) % banners.length);
    }, 8000); // Rotate every 8 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <aside className="w-96 bg-white shadow-inner">
      {banners.length === 0 ? (
        <p className="text-center p-4">
          Nenhum banner disponível no momento.Novidades em breve.
        </p>
      ) : (
        <TransitionGroup>
          <CSSTransition
            key={currentBannerIndex}
            timeout={1000}
            classNames="banner"
          >
            <div className="h-full relative">
              <img
                src={banners[currentBannerIndex]?.imagem}
                alt={
                  banners[currentBannerIndex]?.titulo || "Banner promocional"
                }
                className="w-full h-full object-cover"
              />
              {banners[currentBannerIndex]?.titulo && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">
                    {banners[currentBannerIndex].titulo}
                  </h3>
                </div>
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </aside>
  );
};

export default BannerSidebar;
