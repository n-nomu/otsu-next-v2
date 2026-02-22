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

This tokkuri and guinomi set showcases the raw, powerful aesthetic of Bizen-yaki. The flask is characterized by incised lines (kushime) and a rich, variegated surface born from a high-temperature firing process fueled by red pine wood. These natural markings are not painted; they are the result of wood ash melting onto the clay, creating a unique "landscape" for this specific piece.

Incised Detail (Kushime): Features rhythmic lines carved into the clay, providing a secure grip and a modern, artisanal silhouette.

Natural Texture: The unglazed, iron-rich surface offers a tactile experience that connects the user directly to the earth of Okayama.

Direct Origin: Handcrafted in Bizen, Okayama, and shipped directly from the artisan's studio.`,
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
This handcrafted set features a profound, dark clay body that evokes a sense of quietude. The surface is naturally adorned with a dramatic "Goma" (sesame seed) glaze—a golden-hued ash deposit that flows gracefully across the deep charcoal base. This striking visual is achieved through an intense firing process where red pine ash melts and vitrifies, creating a unique organic pattern.

Unique Contrast: The interplay between the dark, scorched earth and the rich natural ash creates a sophisticated, modern aesthetic.

Timeless Texture: The unglazed surface retains a refined yet earthy feel, designed to deepen in character with years of use.

Direct Origin: Handmade in Bizen, Okayama, and shipped directly from the artisan's studio to preserve its story.`,
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
This set is distinguished by its refined palette of soft grey and warm russet. The upper portion of the flask features a natural "Hai-kaburi" (ash-covered) effect, where intense heat has transformed wood ash into a subtle sheen. Below, the natural reddish-brown of the Bizen clay emerges, creating a gentle gradient that reflects the unpredictable nature of the kiln.

Soft Grey Surface: The unique ash deposits create a quiet, sophisticated presence that changes with the light.

Balanced Form: A slender, elegant silhouette that showcases the natural texture of the unglazed clay.

Direct Origin: Handcrafted in Bizen, Okayama, and shipped directly from the studio.`,
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
This three-piece set is defined by its rugged, tactile surface and deep bronze and charcoal tones. The tokkuri exhibits a coarse, organic texture—a result of the unique composition of Bizen clay reacting to the intense heat of the kiln. With two accompanying guinomi, each showing distinct firing marks, this set is designed for a shared experience of authentic Japanese craft.

Textural Depth: Features a "Kase" (withered) skin with fine protrusions, offering a raw and primal grip that celebrates the clay's origin.

Warm Earth Tones: A harmonious blend of deep reddish-browns and charred charcoal tones, achieved without any artificial pigments.

Complete Set for Two: Includes one tokkuri and two guinomi, each handcrafted and shipped directly from the artisan's studio.

Direct Origin: Created in Bizen, Okayama, and delivered from the kiln to your table.

A Meaningful Gift
This pairing of two distinct "landscapes" symbolizes the harmony between two individuals—ideal for commemorating a bond, a shared journey, or special celebrations.`,
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
This teacup captures the dramatic essence of the kiln's flame. One side features a vibrant, scorched crimson hue—known as Hiiro—while the other transitions into a deep, matte charcoal with hints of warm bronze tones. The subtle horizontal ridges from the potter's wheel add a rhythmic texture, creating a piece that feels grounded yet full of movement.

Dynamic Gradient: The stark contrast between the warm earth tones and the dark, fired surface is a natural result of the placement within the kiln.

Ergonomic Simplicity: A classic cylindrical form that fits naturally in the hands, allowing the user to feel the raw, unglazed texture of Bizen clay.

Direct Origin: Hand-sculpted in Okayama and shipped directly from the artisan's studio.`,
    image: "/product_5_1.jpg",
    image2: "/product_5_2.jpg",
    dimensions: `Height [Insert H] mm
Diameter [Insert D] mm
Weight [Insert W] g
Capacity: Approx. [Insert C] ml`,
    soldOut: false
  },
  {
    id: "9",
    name: "Bizen-yaki Tea Cup Set: The Art of Contrast",
    price: 200,
    description: `The Art of Contrast.

This pair of tea cups embodies the diverse expressions of the Bizen kiln. One cup carries a warm, rich crimson hue (Hiiro), while the other bears the quiet depth of heavy ash deposits in charcoal and earthy tones. The rhythmic ridges left by the potter's wheel provide a secure grip and an organic texture that feels substantial in your hands.

Complementary Personalities: Each piece captures a different moment in the kiln—one vibrant and warm, the other subdued and contemplative.

Versatile Use: Suitable for tea, coffee, or sake. The straightforward cylindrical form fits comfortably in daily rituals.

Direct Origin: Hand-sculpted in Okayama and shipped directly from the artisan's studio.

A Meaningful Gift
The pairing of two distinct "landscapes" symbolizes the harmony between two individuals—ideal for commemorating a bond, a shared journey, or special celebrations.`,
    image: "/product_9_2.jpg",
    image2: "/product_9_1.jpg",
    dimensions: `Cup (Left): Height [ ] × Diameter [ ] mm | Weight [ ] g
Cup (Right): Height [ ] × Diameter [ ] mm | Weight [ ] g
Capacity: Approx. [ ] ml each`,
    soldOut: false
  },
  {
    id: "10",
    name: "Bizen-yaki Cup Set: Natural Tones of the Kiln",
    price: 200,
    description: `*Natural Tones of the Kiln.*

This pair of cups features a complex color palette achieved through prolonged wood-firing. The surfaces are characterized by a deep, charcoal-toned base interwoven with russet accents and a dusting of natural ash. These variations are the direct result of the unpredictable environment inside the kiln, ensuring that no two cups share the exact same aesthetic.

*Color Variation:* Exhibits a gradient from dark, scorched earth to warm, iron-rich ochre.

*Surface Texture:* The unglazed exterior reveals a matte, granular finish with micro-specks of vitrified ash.

*Complementary Pair:* Each cup displays distinct yet harmonious firing marks, designed to be used together or individually.

*Direct Origin:* Handmade in Bizen, Okayama, and shipped directly from the artisan's studio.

*Ideal for Gifting*
With their complementary yet distinct colorations, this set is a popular choice for meaningful gifts.`,
    image: "/product_10_1.jpg",
    image2: "/product_10_2.jpg",
    dimensions: `Cup (Left): Height [ ] × Diameter [ ] mm | Weight [ ] g
Cup (Right): Height [ ] × Diameter [ ] mm | Weight [ ] g
Capacity: Approx. [ ] ml each`,
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