export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Jogos de Banheiro' | 'Mesa & Decoração' | 'Tapetes & Passadeiras' | 'Bolsas & Acessórios' | 'Ofertas & Promoções' | 'Cursos & Receitas';
  price: number;
  originalPrice?: number;
  isPromo?: boolean;
  promoDiscountPercent?: number;
  installments: number;
  installmentValue: number;
  image: string;
  secondaryImage?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  dimensions?: {
    height: string;
    width: string;
    depth: string;
    weight: string;
  };
  material: string;
  hardware: string;
  lining: string;
  colors: {
    name: string;
    hex: string;
  }[];
  isReadyToShip: boolean;
  productionTimeDays?: number;
  badge?: string;
  isDigital?: boolean;
}

export interface CartItem {
  id: string; // unique item instance id (productId + color + hardware + monogram)
  productId: string;
  name: string;
  price: number;
  image: string;
  selectedColor: string;
  selectedHardware?: string;
  monogram?: string;
  quantity: number;
  isDigital?: boolean;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  productName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface CustomBagConfig {
  modelId: string;
  modelName: string;
  basePrice: number;
  selectedColor: string;
  colorName: string;
  selectedHardware: 'Dourado Nobre (Verniz Italiano)' | 'Prata Níquel Alto Brilho';
  strapType: 'Alça Dupla em Crochê' | 'Corrente com Ombreira em Couro' | 'Alça Longa Transversal';
  monogram: string;
  liningColor: 'Cetim Champagne' | 'Cetim Preto Acetinado' | 'Cetim Nude Rosé';
}
