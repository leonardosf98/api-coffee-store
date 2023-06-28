function products(request, response) {
  [
    response.json([
      {
        id: 1,
        name: "Capuccino",
        price: 10,
        image:
          "https://tb4371.vtexassets.com/arquivos/ids/155488/FOTOS_REDIMENSIONADAS_CAPPUCCINO--1-.jpg?v=637777057839830000",
        description:
          "Café espresso com leite vaporizado e espuma de leite em proporções iguais",
      },
      {
        id: 2,
        name: "Flat White",
        price: 12,
        image:
          "https://tb4371.vtexassets.com/arquivos/ids/155488/FOTOS_REDIMENSIONADAS_CAPPUCCINO--1-.jpg?v=637777057839830000",
        description:
          "Duplo espresso com leite vaporizado e pouca espuma de leite",
      },
      {
        id: 3,
        name: "Latte",
        price: 11,
        image:
          "https://tb4371.vtexassets.com/arquivos/ids/155488/FOTOS_REDIMENSIONADAS_CAPPUCCINO--1-.jpg?v=637777057839830000",
        description:
          "Café espresso com leite vaporizado e espuma de leite em proporções iguais",
      },
      {
        id: 4,
        name: "Espresso",
        price: 6,
        image:
          "https://tb4371.vtexassets.com/arquivos/ids/155488/FOTOS_REDIMENSIONADAS_CAPPUCCINO--1-.jpg?v=637777057839830000",
        description: "Uma dose de café espresso",
      },
      {
        id: 5,
        name: "Duplo espresso",
        price: 10,
        image:
          "https://tb4371.vtexassets.com/arquivos/ids/155488/FOTOS_REDIMENSIONADAS_CAPPUCCINO--1-.jpg?v=637777057839830000",
        description: "Café espresso em dose dupla",
      },
    ]),
  ];
}

export default products;
