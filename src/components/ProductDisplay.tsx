import React, { memo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Product } from "../types";
import { Tag } from "lucide-react";

interface ProductDisplayProps {
  products: Product[];
}

const ProductDisplay: React.FC<ProductDisplayProps> = memo(({ products }) => {
  const formatPrice = (price: string) => {
    if (!price) return price;
    const parts = price.split("");
    return (
      <span className="whitespace-nowrap">
        <span className="text-3xl">{parts.slice(0, 2).join("")}</span>
        <span className="text-4xl">{parts.slice(2, -2).join("")}</span>
        <span className="text-3xl">{parts.slice(-2).join("")}</span>
      </span>
    );
  };

  const isDestaque = (value: boolean | number | string) =>
    value === true || value === 1 || value === "TRUE";

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-7xl">
        {products.map((product) => (
          <CSSTransition key={product.id} timeout={1000} classNames="product">
            <div
              className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden"
              style={{ height: "450px" }}
            >
              <div className="w-full md:w-1/2 p-4 flex flex-col">
                <img
                  src={product.imagem_cabecalho}
                  alt={`Logo ${product.nome}`}
                  className="w-full h-32 object-contain mb-4"
                  loading="lazy"
                />
                <div
                  className="p-4 rounded-lg shadow-lg transform rotate-3 mb-4"
                  style={{ background: "var(--primary)" }}
                >
                  <p
                    className="text-4xl font-black animate-pulse"
                    style={{ color: "var(--secondary)" }}
                  >
                    {formatPrice(product.preco)}
                  </p>
                </div>
                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--secondary)" }}
                >
                  {product.nome}
                </h2>
                <p className="text-gray-800 text-lg line-clamp-4">
                  {product.descricao}
                </p>
                {isDestaque(product.destaque) && (
                  <div
                    className="absolute top-4 left-4 font-bold text-white px-3 py-1 rounded-full flex items-center"
                    style={{ background: "var(--secondary)" }}
                    role="badge"
                    aria-label="Produto em promoção"
                  >
                    <Tag size={16} className="mr-1" aria-hidden="true" />
                    PROMOÇÃO
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 relative">
                <img
                  src={product.imagem}
                  alt={product.nome}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

ProductDisplay.displayName = 'ProductDisplay';

export default ProductDisplay;