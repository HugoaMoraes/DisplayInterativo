<div align="center">
<img src="https://github.com/HugoaMoraes/IconDigital/assets/102623594/a6c43865-6821-472b-9c05-65878d4e8780" width="200px" />
</div>

# Display Dinâmico

Uma aplicação React para exibição de produtos e banners promocionais de forma dinâmica, ideal para ambientes de varejo ou atacadção.

## Autor

- [@hugo.amoraes](https://github.com/HugoaMoraes)

## Versão

`v.1.0.0`

## Links

<div align="center">
  <a href="https://linktr.ee/hug.odesign" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Linktree&logo=linktree&label=&color=1de9b6&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linktree logo"  />
  </a>
  <a href="https://www.linkedin.com/in/hugoamoraes/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo"  />
  </a>
  <a href="https://api.whatsapp.com/send?phone=5561986391903" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Whatsapp&logo=whatsapp&label=&color=25D366&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="whatsapp logo"  />
  </a>
  <a href="https://www.instagram.com/hugo.amoraes/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Instagram&logo=instagram&label=&color=E4405F&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="instagram logo"  />
  </a>
</div>

## Funcionalidades

- **Exibição de Produtos:**

  - Mostra dois produtos por vez, alternando automaticamente a cada 10 segundos.
  - Exibe informações como nome, preço e descrição do produto.

- **Banners Promocionais:**

  - Exibe banners promocionais na lateral da tela.

- **Rodapé com Datas de Promoção:**

  - Mostra as datas de validade das promoções com um efeito de digitação.

- **Atualização Automática:**

  - Os dados de produtos e banners são atualizados automaticamente a cada 12 horas.

- **Responsividade:**

  - O layout é responsivo, garantindo uma boa experiência em diferentes tamanhos de tela.

- **Tratamento de Erros:**
  - Exibe mensagens amigáveis caso ocorra algum problema ao carregar os dados.

## Tecnologias Utilizadas

- **React:** Biblioteca principal para construção da interface.
- **TypeScript:** Para tipagem estática e maior segurança no código.
- **Tailwind CSS:** Para estilização responsiva e moderna.
- **date-fns:** Para manipulação e formatação de datas.
- **react-simple-typewriter:** Para o efeito de digitação no rodapé.

## Endpoints

### Exemplo de Estrutura de Dados

Produto

```json
{
  "id": 1,
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto.",
  "preco": "R$ 10,00",
  "data_inicio": "2025-05-09",
  "data_fim": "2025-05-10",
  "imagem_cabecalho": "url_da_imagem"
}
```

Banner

```json
{
  "id": 1,
  "titulo": "Promoção Especial",
  "imagem": "url_do_banner"
}
```

## Como usar DEV

1. **Pré-requisitos:**

   - Node.js instalado na máquina.
   - Gerenciador de pacotes `npm`.

2. **Instalação:**
   Clone o repositório e instale as dependências:

   ```bash
   git clone https://github.com/HugoaMoraes/DiplayInterativo
   cd DiplayInterativo
   npm install
   ```

3. run:

```bash
npm run dev
```

4. O servidor estará disponível em:

```bash
http://localhost:5173
```

5. Build:

```bash
npm run build
```

## Como usar PROD

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor RECT:

```bash
npm run start
```

3. O servidor estará disponível em:

```bash
http://localhost:3003
```

## Diagrama

<div align="center">
<img src="https://github.com/user-attachments/assets/024524c1-bfdc-40f0-ac64-9933630ea411" width="auto" />
</div>

## Informações:

MVP em funcionamento!
