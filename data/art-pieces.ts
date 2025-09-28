export interface ArtPiece {
  id: string;
  title: string;
  artist: string;
  year: number;
  price: number;
  currency: string;
  medium: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  category:
    | "painting"
    | "sculpture"
    | "photography"
    | "digital"
    | "mixed-media";
  provenance: string;
  exhibition: string;
  rarity: "unique" | "limited-edition" | "rare";
  featured: boolean;
}

export const artPieces: ArtPiece[] = [
  {
    id: "1",
    title: "Interchange",
    artist: "Willem de Kooning",
    year: 1955,
    price: 300000000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "200.7 cm × 175.3 cm (79 in × 69 in)",
    description:
      "Abstract expressionist masterpiece featuring bold brushstrokes and vibrant colors, representing the pinnacle of de Kooning's artistic achievement. This monumental work exemplifies the artist's revolutionary approach to form and space.",
    imageUrl: "/images/interchange.jpg",
    category: "painting",
    provenance: "Kenneth C. Griffin Collection",
    exhibition: "Museum of Modern Art, New York",
    rarity: "unique",
    featured: true
  },
  {
    id: "2",
    title: "The Card Players",
    artist: "Paul Cézanne",
    year: 1895,
    price: 275000000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "97 cm × 130 cm (38 in × 51 in)",
    description:
      "One of five paintings in Cézanne's iconic Card Players series, depicting Provençal peasants immersed in their card game. This masterpiece represents the bridge between Impressionism and modern art.",
    imageUrl: "/images/the-card-players.jpg",
    category: "painting",
    provenance: "State of Qatar",
    exhibition: "Musée d'Orsay, Paris",
    rarity: "limited-edition",
    featured: true
  },
  {
    id: "3",
    title: "Twelve Landscape Screens",
    artist: "Qi Baishi",
    year: 1925,
    price: 140800000,
    currency: "USD",
    medium: "Ink and color on paper",
    dimensions: "180 cm × 47 cm each (71 in × 18.5 in)",
    description:
      "A magnificent set of twelve landscape screens by the master of Chinese painting, showcasing seasonal changes through delicate brushwork and poetic sensibility. Each screen captures the essence of traditional Chinese landscape painting.",
    imageUrl: "/images/twelve-landscape-screens.jpg",
    category: "painting",
    provenance: "Private Asian Collection",
    exhibition: "National Museum of China, Beijing",
    rarity: "unique",
    featured: true
  },
  {
    id: "4",
    title: "L'empire des lumières",
    artist: "René Magritte",
    year: 1961,
    price: 121100000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "114.5 cm × 146.5 cm (45 in × 57.7 in)",
    description:
      "A surrealist masterpiece depicting the paradox of day and night existing simultaneously. Magritte's exploration of light and darkness creates a dreamlike quality that challenges perception and reality.",
    imageUrl: "/images/empire-des-lumieres.jpg",
    category: "painting",
    provenance: "Private European Collection",
    exhibition: "Centre Pompidou, Paris",
    rarity: "limited-edition",
    featured: true
  },
  {
    id: "5",
    title: "Flag",
    artist: "Jasper Johns",
    year: 1958,
    price: 110000000,
    currency: "USD",
    medium: "Encaustic, oil, and collage on fabric mounted on plywood",
    dimensions: "107.3 cm × 153.8 cm (42.25 in × 60.63 in)",
    description:
      "An iconic work of American pop art and neo-Dada, Johns' Flag series challenged traditional notions of painting and representation. This piece blurs the line between art object and symbol.",
    imageUrl: "/images/flag.jpg",
    category: "painting",
    provenance: "Museum of Modern Art, New York",
    exhibition: "Whitney Museum of American Art, New York",
    rarity: "limited-edition",
    featured: false
  },
  {
    id: "6",
    title: "Number 17A",
    artist: "Jackson Pollock",
    year: 1948,
    price: 200000000,
    currency: "USD",
    medium: "Oil on fiberboard",
    dimensions: "112 cm × 86.4 cm (44 in × 34 in)",
    description:
      "Abstract expressionist drip painting exemplifying Pollock's revolutionary technique and artistic vision. This work demonstrates the artist's unique approach to gesture, rhythm, and the physical act of painting.",
    imageUrl: "/images/number-17a.jpg",
    category: "painting",
    provenance: "Kenneth C. Griffin Collection",
    exhibition: "Museum of Modern Art, New York",
    rarity: "unique",
    featured: true
  },
  {
    id: "7",
    title: "Orange, Red, Yellow",
    artist: "Mark Rothko",
    year: 1961,
    price: 186000000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "236.2 cm × 206.4 cm (93 in × 81.25 in)",
    description:
      "A monumental color field painting that exemplifies Rothko's mature style. The luminous rectangles of color create a meditative, almost spiritual experience, inviting deep contemplation.",
    imageUrl: "/images/orange-red-yellow.jpg",
    category: "painting",
    provenance: "Private Collection",
    exhibition: "Tate Modern, London",
    rarity: "unique",
    featured: true
  },
  {
    id: "8",
    title: "Juin-Octobre 1985",
    artist: "Zao Wou-Ki",
    year: 1985,
    price: 65000000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "280 cm × 1000 cm (110 in × 394 in)",
    description:
      "A monumental triptych that represents the pinnacle of Zao Wou-Ki's artistic achievement, blending Eastern philosophy with Western abstract expressionism. This work captures the essence of time and nature.",
    imageUrl: "/images/juin-octobre-1985.jpg",
    category: "painting",
    provenance: "Private Collection, Hong Kong",
    exhibition: "Musée d'Art Moderne, Paris",
    rarity: "unique",
    featured: false
  },
  {
    id: "9",
    title: "Mont Sainte-Victoire",
    artist: "Paul Cézanne",
    year: 1904,
    price: 60000000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "73 cm × 91.9 cm (28.7 in × 36.2 in)",
    description:
      "One of Cézanne's final masterpieces depicting the mountain that obsessed him throughout his career. This work shows his revolutionary approach to form and color that would influence generations of artists.",
    imageUrl: "/images/mont-sainte-victoire.jpg",
    category: "painting",
    provenance: "Private Collection, Switzerland",
    exhibition: "Musée d'Orsay, Paris",
    rarity: "rare",
    featured: false
  },
  {
    id: "10",
    title: "Onement VI",
    artist: "Barnett Newman",
    year: 1953,
    price: 43800000,
    currency: "USD",
    medium: "Oil on canvas",
    dimensions: "259.1 cm × 213.4 cm (102 in × 84 in)",
    description:
      "A monumental work from Newman's Onement series, featuring his signature 'zip' - a vertical line that divides the canvas. This painting explores themes of creation, spirituality, and the sublime.",
    imageUrl: "/images/onement-vi.jpg",
    category: "painting",
    provenance: "Sotheby's New York",
    exhibition: "Museum of Modern Art, New York",
    rarity: "limited-edition",
    featured: false
  }
];

export function getFeaturedArtPieces(): ArtPiece[] {
  return artPieces.filter(piece => piece.featured);
}

export function getArtPieceById(id: string): ArtPiece | undefined {
  return artPieces.find(piece => piece.id === id);
}

export function getArtPiecesByCategory(
  category: ArtPiece["category"]
): ArtPiece[] {
  return artPieces.filter(piece => piece.category === category);
}

export function getAllArtPieces(): ArtPiece[] {
  return artPieces;
}

export function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}
