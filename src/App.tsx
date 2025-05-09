import React, { useState, useEffect } from "react";
import { format, isValid, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import ProductDisplay from "./components/ProductDisplay";
import BannerSidebar from "./components/BannerSidebar";
import LoadingScreen from "./components/LoadingScreen";
import { Product, Banner } from "./types";
import { fetchProducts, fetchBanners } from "./services/dataService";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const [promotionDates, setPromotionDates] = useState<string>(
    "Válida de --/--/---- até --/--/----"
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productData, bannerData] = await Promise.all([
          fetchProducts(),
          fetchBanners(),
        ]);

        setProducts(productData);
        setBanners(bannerData);
        setCurrentProducts(productData.slice(0, 2));
        setError(null);
      } catch (err) {
        console.error("Error loading data:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Falha ao carregar dados. Por favor, tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
    const interval = setInterval(loadData, 43200000); // Atualiza a cada 12 horas
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (products.length < 2) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 2) % products.length;
      const nextProducts = [
        products[currentIndex],
        products[(currentIndex + 1) % products.length],
      ];
      setCurrentProducts(nextProducts);
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, [products]);

  useEffect(() => {
    if (!currentProducts.length) {
      setPromotionDates("Válida de --/--/---- até --/--/----");
      return;
    }

    try {
      const normalizedStart =
        normalizeDate(currentProducts[0].data_inicio) ?? "";
      const normalizedEnd = normalizeDate(currentProducts[0].data_fim) ?? "";
      const startDateISO = parseISO(normalizedStart);
      const endDateISO = parseISO(normalizedEnd);

      if (!isValid(startDateISO) || !isValid(endDateISO)) {
        setPromotionDates("Válida de --/--/---- até --/--/----");
        return;
      }

      const startDate = format(startDateISO, "dd/MM/yyyy", { locale: ptBR });
      const endDate = format(endDateISO, "dd/MM/yyyy", { locale: ptBR });
      setPromotionDates(`Válida de ${startDate} até ${endDate}`);
    } catch (err) {
      console.error("Error formatting dates:", err);
      setPromotionDates("Válida de --/--/---- até --/--/----");
    }
  }, [currentProducts]);

  const normalizeDate = (date: string | undefined) => {
    if (!date || typeof date !== "string") return null;
    const cleanDate = date.trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(cleanDate)) return cleanDate; // Formato ISO
    const parts = cleanDate.split("/");
    if (parts.length === 3 && parts.every((part) => !isNaN(Number(part)))) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`; // Converte para ISO
    }
    return null; // Retorna null para formatos inválidos
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="h-screen w-screen overflow-hidden flex"
      style={{ background: "var(--bg)" }}
    >
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="bg-white mx-auto rounded-xl p-2 shadow-lg mt-2">
            <img
              src="https://i.ibb.co/8nXMgR2c/Logo-atacadista.png"
              alt="Cabeçalho Logo Super Adega"
              className="w-full h-30 object-contain"
            />
          </div>
          {error ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-red-600 text-3xl font-black">{error}</p>
            </div>
          ) : (
            <>
              {currentProducts.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-500 text-xl">
                    Nenhum produto disponível no momento.
                  </p>
                </div>
              ) : (
                <ProductDisplay products={currentProducts} />
              )}
              <footer
                className="text-white p-4 text-center"
                style={{ background: "var(--secondary)" }}
              >
                <p className="text-sm">
                  Promoção por tempo limitado.{" "}
                  <span className="inline">
                    <Typewriter
                      words={[promotionDates]} // Texto dinâmico
                      loop={1} // Não repete a animação
                      cursor // Mostra o cursor piscando
                      typeSpeed={50} // Velocidade de digitação
                      deleteSpeed={30} // Velocidade ao apagar (se necessário)
                    />
                  </span>
                  . Consulte condições na loja. Imagens meramente ilustrativas.
                </p>
              </footer>
            </>
          )}
        </div>
        <BannerSidebar banners={banners} />
      </main>
    </div>
  );
}

export default App;
