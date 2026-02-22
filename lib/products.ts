export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  image2?: string;
  dimensions?: string;
  soldOut?: boolean;
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
    id: "7",
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
    id: "8",
    name: "Bizen-yaki Sake Set: Earthy Texture and Deep Bronze",
    price: 380,
    description: `A Presence of Time and Fire.
This three-piece set is defined by its rugged, tactile surface and rich bronze-like hues. The tokkuri exhibits a coarse, organic texture—a result of the unique composition of Bizen clay reacting to the intense heat of the kiln. With two accompanying guinomi, each showing distinct firing marks and subtle gloss, this set is designed for a shared experience of authentic Japanese craft.

Textural Depth: Features a "Kase" (withered) skin with fine protrusions, offering a raw and primal grip that celebrates the clay's origin.

Warm Earth Tones: A harmonious blend of deep reddish-browns and charred charcoal tones, achieved without any artificial pigments.

Complete Set for Two: Includes one tokkuri and two guinomi, each handcrafted and shipped directly from the artisan's studio.

Direct Origin: Created in Bizen, Okayama, and delivered from the kiln to your table.

Popular as a gift for weddings, anniversaries, and special celebrations.`,
    image: "/product_8_1.jpg",
    image2: "/product_8_2.jpg",
    dimensions: `Tokkuri (Flask): Height [ ] × Width [ ] mm | Weight [ ] g
Guinomi (Left): Height [ ] × Width [ ] mm | Weight [ ] g
Guinomi (Right): Height [ ] × Width [ ] mm | Weight [ ] g
Capacity: Approx. [ ] ml (flask) / [ ] ml each (cups)`
  },
  {
    id: "5",
    name: "Bizen-yaki Tea Cup: Crimson Fire and Iron Earth",
    price: 100,
    description: `A Study in Duality.
This teacup captures the dramatic essence of the kiln's flame. One side features a vibrant, scorched crimson hue—known as Hiiro—while the other transitions into a deep, matte charcoal with hints of metallic bronze. The subtle horizontal ridges from the potter's wheel add a rhythmic texture, creating a piece that feels grounded yet full of movement.

Dynamic Gradient: The stark contrast between the warm earth tones and the dark, fired surface is a natural result of the placement within the kiln.

Ergonomic Simplicity: A classic cylindrical form that fits naturally in the hands, allowing the user to feel the raw, unglazed texture of Bizen clay.

Direct Heritage: Hand-sculpted in Okayama and shipped directly from the artisan's studio.`,
    image: "/product_5_1.jpg",
    image2: "/product_5_2.jpg",
    dimensions: `Height [Insert H] mm
Diameter [Insert D] mm
Weight [Insert W] g
Capacity: Approx. [Insert C] ml`,
    soldOut: false
  },
  {
    id: "3",
    name: "Rice Bowl Set (2)",
    price: 220,
    description: "",
    image: "/product_rice_bowls.jpg",
    soldOut: true
  },
  {
    id: "4",
    name: "Sake Flask — Sangiri",
    price: 195,
    description: "",
    image: "/product_sake_flask.jpg",
    soldOut: true
  },
  {
    id: "6",
    name: "Small Jar — Kobizen",
    price: 310,
    description: "",
    image: "/product_jar.jpg",
    soldOut: true
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};