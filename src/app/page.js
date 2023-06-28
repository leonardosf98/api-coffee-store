"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

/*
const showProducts = async () => {
  const products = document.querySelectorAll(".products-container");
  const itens = await fetchProduct();

  itens.map((item) => {
    const product = document.createElement("div");
    product.classList.add(`product`);
    product.classList.add(`product-${item.id}`);
    product.innerHTML = `
    
      <img src="${item.image}" alt="${item.name}" width="100px">
      <h3>${item.name}</h3>
      
      <p class="description">${item.description}</p>
      
      <h4>R$ ${item.price}</h4>
      
      <button class="add-to-cart">Adicionar ao carrinho</button>
      
    `;
    products[0].appendChild(product);
  });
};

async function fetchProduct() {
  const productsURL = "https://api-coffee-store.vercel.app/api/products";
  const response = await fetch(productsURL);

  return await response.json();
}
showProducts();

function addProductToCart() {}
*/
const initialProducts = [
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
    description: "Duplo espresso com leite vaporizado e pouca espuma de leite",
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
];

export default function Home() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.containerLink} href="/index.html">
          <Image
            width={50}
            height={50}
            className={styles.headerImage}
            src="/caneca.png"
            alt="imagem de caneca marrom"
          />
          <h1 className={styles.brandTitle}>blue ninja coffee shop</h1>
        </a>
      </header>
      <div className={styles.productsContainer}>
        {products.map((item) => (
          <div className={`${styles.product} product-${item.id}`}>
            <img src={`${item.image}`} alt={`${item.name}`} width="100px" />
            <h3>{item.name}</h3>

            <p className={styles.description}>${item.description}</p>

            <h4>R${item.price}</h4>

            <button className={styles.addToCart}>Adicionar ao carrinho</button>
          </div>
        ))}

        {/*
            const product = document.createElement("div");
            product.classList.add(`product`);
            product.classList.add(`product-${item.id}`);
            product.innerHTML = `
            
              <img src="${item.image}" alt="${item.name}" width="100px">
              <h3>${item.name}</h3>
              
              <p class="description">${item.description}</p>
              
              <h4>R$ ${item.price}</h4>
              
              <button class="add-to-cart">Adicionar ao carrinho</button>
              
            `;
            products[0].appendChild(product);
          */}
      </div>
      <div className={styles.cart}></div>
    </main>
  );
}
