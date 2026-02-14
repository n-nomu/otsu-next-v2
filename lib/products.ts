export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bizen Tea Bowl — Hidasuki",
    price: 180,
    description: "",
    image: "/product_tea_bowl.jpg",
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