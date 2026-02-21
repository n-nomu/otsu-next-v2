export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  image2?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bizen Sake Set — Tokkuri & Guinomi",
    price: 260,
    description: "A sake flask (tokkuri) and cup (guinomi) set, fired in Bizen, Okayama.\n\nThe flask features natural ash glaze patterns and incised lines carved into the clay body. The cup shares the same warm, earthy tones. Both pieces rest on a wooden stand.\n\nHandmade in Bizen, Okayama Prefecture. Shipped directly from the artisan's studio.\n\n[Dimensions and weight to be added]",
    image: "/product_1_1.jpg",
    image2: "/product_1_2.jpg",
  },
  {
    id: "2",
    name: "Flower Vase — Goma",
    price: 340,
    description: "",
    image: "/product_vase.jpg",
  },
  {
    id: "3",
    name: "Rice Bowl Set (2)",
    price: 220,
    description: "",
    image: "/product_rice_bowls.jpg",
  },
  {
    id: "4",
    name: "Sake Flask — Sangiri",
    price: 195,
    description: "",
    image: "/product_sake_flask.jpg",
  },
  {
    id: "5",
    name: "Round Plate — Yohen",
    price: 260,
    description: "",
    image: "/product_plate.jpg",
  },
  {
    id: "6",
    name: "Small Jar — Kobizen",
    price: 310,
    description: "",
    image: "/product_jar.jpg",
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};