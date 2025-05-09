/**
 * Verifica se o produto é destaque.
 * Aceita valores booleanos, numéricos ou strings.
 */
export const isDestaque = (value: boolean | number | string): boolean => {
  return value === true || value === 1 || value === "true";
};

/**
 * Formata o preço para o formato de moeda brasileira (R$).
 * Aceita números e converte para string formatada.
 */
export const formatPrice = (price: number): string => {
  if (typeof price !== "number" || isNaN(price)) {
    console.error("O preço fornecido não é um número válido:", price);
    return "R$ 0,00";
  }

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};
