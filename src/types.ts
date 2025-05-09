export interface Product {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  data_inicio: string;
  data_fim: string;
  destaque: boolean;
  descricao: string;
  imagem_cabecalho: string;
}

export interface Banner {
  id: number;
  imagem: string;
  titulo: string;
}
