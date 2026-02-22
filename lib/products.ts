export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  image2?: string;
  dimensions?: string;
  soldOut?: boolean; // Sold Out用フィールド追加
}

export const products: Product[] = [
  {
    id: "1",
    name: "Bizen-yaki Sake Set: The Essence of Earth and Fire",
    price: 260,
    description: `The Beauty of Imperfection.

This tokkuri and guinomi set showcases the raw, powerful aesthetic of Bizen-yaki. The flask is characterized by intentional incised lines (kushime) and a rich, variegated surface born from a high-temperature firing process fueled by red pine wood. These natural markings are not painted; they are the result of wood ash melting onto the clay, creating a unique "landscape" for this specific piece.

Hand-Incised Detail (Kushime): Features rhythmic lines carved into the clay, providing a secure grip and a modern, artisanal silhouette.

Natural Texture: The unglazed, iron-rich surface offers a tactile experience that connects the user directly to the earth of Okayama.

Direct Provenance: Handcrafted in Bizen and shipped directly from the artisan's studio.`,
    image: "/product_1_1.jpg",
    image2: "/product_1_2.jpg",
    dimensions: `Tokkuri (Flask): Height [ ] × Width [ ] mm | Weight [ ] g
Guinomi (Cup): Height [ ] × Width [ ] mm | Weight [ ] g
Capacity: Approx. [ ] ml`
  },
  {
    id: "2",
    name: "Bizen-yaki Sake Set: Deep Tones and Flowing Ash",
    price: 260,
    description: `A Contrast of Stillness and Movement.
This handcrafted set features a profound, dark clay body that evokes a sense of quietude. The surface is naturally adorned with a dramatic "Goma" (sesame seed) glaze—a golden-hued ash deposit that flows gracefully across the deep charcoal base. This striking visual is achieved through an intense, days-long firing process where red pine ash melts and vitrifies, creating a one-of-a-kind organic pattern.

Unique Contrast: The interplay between the dark, scorched earth and the luminous natural ash creates a sophisticated, modern aesthetic.

Timeless Texture: The unglazed surface retains a refined yet earthy feel, designed to deepen in luster and character with years of use.

Direct Heritage: Handmade in Bizen, Okayama, and shipped directly from the artisan's studio to preserve its story.`,
    image: "/product_2_1.jpg",
    dimensions: `Tokkuri (Flask): Height [ ] × Width [ ] mm | Weight [ ] g
Guinomi (Cup): Height [ ] × Width [ ] mm | Weight [ ] g
Capacity: Approx. [ ] ml`
  },
  {
    id: "7", // 新規ID：Shopページで3番目に表示
    name: "Bizen-yaki Sake Set: Silvery Ash and Earth Tones",
    price: 260,
    description: `Subtle Elegance.
This set is distinguished by its refined palette of soft grey and warm russet. The upper portion of the flask features a natural "Hai-kaburi" (ash-covered) effect, where intense heat has transformed wood ash into a subtle, metallic luster. Below, the natural reddish-brown of the Bizen clay emerges, creating a gentle gradient that reflects the unpredictable nature of the kiln.

Silver-Grey Sheen: The unique ash deposits create a quiet, sophisticated glow that changes with the light.

Balanced Form: A slender, elegant silhouette that showcases the natural texture of the unglazed clay.

Direct Lineage: Handcrafted in Bizen, Okayama, and shipped directly from the studio.`,
    image: "/product_7_1.jpg",
    image2: "/product_7_2.jpg",
    dimensions: `Tokkuri (Flask): Height [ ] × Width [ ] mm | Weight [ ] g
Guinomi (Cup): Height [ ] × Width [ ] mm | Weight [ ] g
Capacity: Approx. [ ] ml`
  },
  {
    id: "3", // Sold Outに変更
    name: "Rice Bowl Set (2)",
    price: 220,
    description: "",
    image: "/product_rice_bowls.jpg",
    soldOut: true // Sold Outフラグ追加
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