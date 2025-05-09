import React from "react";
import { ShoppingCart } from "lucide-react";

const LoadingScreen: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="animate-bounce bg-red-600 p-4 rounded-full">
            <ShoppingCart className="h-10 w-10 text-white" />
          </div>
        </div>

        <h1
          className="text-3xl font-black mb-2"
          style={{ color: "var(--secondary)" }}
        >
          ATACADÃO
        </h1>
        <p className="text-xl font-bold" style={{ color: "var(--secondary)" }}>
          Carregando ofertas imperdíveis...
        </p>

        <div className="mt-8 w-48 h-2 bg-red-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-red-600 animate-loadingBar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
