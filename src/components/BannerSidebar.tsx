import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Banner } from "../types";

interface BannerSidebarProps {
  banners: Banner[];
}

const BannerSidebar: React.FC<BannerSidebarProps> = ({ banners }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const nodeRefs = useRef(new Map<number, React.RefObject<HTMLDivElement>>()); // Cria um mapa para armazenar refs

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
          Nenhum banner disponível no momento. Novidades em breve.
        </p>
      ) : (
        <TransitionGroup>
          {banners.map((banner, index) => {
            if (!nodeRefs.current.has(banner.id)) {
              nodeRefs.current.set(banner.id, React.createRef());
            }

            const isActive = index === currentBannerIndex;

            return (
              <CSSTransition
                key={banner.id}
                timeout={1000}
                classNames="banner"
                nodeRef={nodeRefs.current.get(banner.id)} // Usa a ref do mapa
              >
                <div
                  ref={nodeRefs.current.get(banner.id)}
                  className={`h-full relative ${isActive ? "block" : "hidden"}`}
                >
                  <img
                    src={banner.imagem}
                    alt={banner.titulo || "Banner promocional"}
                    className="w-full h-full object-cover"
                  />
                  {banner.titulo && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white text-xl font-bold">
                        {banner.titulo}
                      </h3>
                    </div>
                  )}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      )}
    </aside>
  );
};

export default BannerSidebar;
