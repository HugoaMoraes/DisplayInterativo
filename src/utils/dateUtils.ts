import { format, isValid, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export const normalizeDate = (date: string | undefined) => {
  if (!date) return null;
  const cleanDate = date.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(cleanDate)) return cleanDate;
  const parts = cleanDate.split("/");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return null;
};

interface Product {
  data_inicio: string;
  data_fim: string;
}

export const getPromotionDates = (currentProducts: Product[]) => {
  if (!currentProducts.length)
    return "Promoção por tempo limitado. Consulte condições na loja.";

  try {
    const startDateISO = parseISO(
      normalizeDate(currentProducts[0].data_inicio) ?? ""
    );
    const endDateISO = parseISO(
      normalizeDate(currentProducts[0].data_fim) ?? ""
    );

    if (!isValid(startDateISO) || !isValid(endDateISO)) {
      return "Promoção por tempo limitado. Consulte condições na loja.";
    }

    const startDate = format(startDateISO, "dd/MM/yyyy", { locale: ptBR });
    const endDate = format(endDateISO, "dd/MM/yyyy", { locale: ptBR });
    return `Promoção por tempo limitado. Válida de ${startDate} até ${endDate}. Consulte condições na loja. Imagens meramente ilustrativas.`;
  } catch (err) {
    console.error("Error formatting dates:", err);
    return "Promoção por tempo limitado. Consulte condições na loja.";
  }
};
