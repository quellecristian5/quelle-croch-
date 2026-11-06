import { Product, Review } from '../types';

export const PRODUCTS: Product[] = [
  // 1. JOGOS DE BANHEIRO
  {
    id: 'jogo-banheiro-harmonia',
    name: 'Jogo de Banheiro Harmonia (3 Peças)',
    subtitle: 'Trama tridimensional felpuda em barbante 100% algodão 8 fios, com encaixe ergonômico e base antiderrapante.',
    category: 'Jogos de Banheiro',
    price: 260,
    originalPrice: 295,
    installments: 10,
    installmentValue: 26,
    image: '/src/assets/images/crochet_bathroom_set_1793930031023.jpg',
    secondaryImage: '/src/assets/images/crochet_rug_living_1793930033384.jpg',
    rating: 5.0,
    reviewsCount: 74,
    badge: 'Mais Vendido',
    description: 'O Jogo de Banheiro Harmonia transforma seu lavabo em um spa particular. Confeccionado com barbante ecológico nobre 8 fios de toque aveludado, possui alta absorção e gramatura pesada que não escorrega no chão. Composto por Tapete de Pia (70 x 50 cm), Tapete Pé do Vaso com recorte anatômico (50 x 48 cm) e Tampa do Vaso ajustável com rede interna elástica.',
    features: [
      '3 Peças completas: Tapete de Pia, Tapete Pé do Vaso e Tampa do Vaso',
      'Ponto tridimensional em alto relevo que massageia os pés',
      'Acabamento com aplicação de resina antiderrapante segura na base',
      'Pode ser lavado à máquina no ciclo delicado com sabão neutro',
      'Fio 100% algodão pré-encolhido que não deforma nem desbota'
    ],
    dimensions: {
      height: 'Tapete Pia: 70x50 cm',
      width: 'Pé do Vaso: 50x48 cm',
      depth: 'Tampa: 55x45 cm',
      weight: '1.450 g (jogo completo)'
    },
    material: 'Barbante ecológico nobre 8 fios 100% algodão penteado',
    hardware: 'Rede elástica traseira reforçada com ponteiras protegidas',
    lining: 'Base tratada com antiderrapante incolor imperceptível',
    colors: [
      { name: 'Bege Areia Natural', hex: '#D7C4B7' },
      { name: 'Branco Pérola', hex: '#F7F5F0' },
      { name: 'Cru & Terracota', hex: '#B8532F' },
      { name: 'Cinza Névoa', hex: '#9E9E9E' }
    ],
    isReadyToShip: true
  },

  // 2. MESA & DECORAÇÃO
  {
    id: 'sousplat-mesa-realeza',
    name: 'Kit Sousplat Mesa Posta Realeza (6 Lugares)',
    subtitle: 'Jogo americano rendado de 38cm em ponto russo com porta-guardanapos e fio de sustentação engomado.',
    category: 'Mesa & Decoração',
    price: 290,
    originalPrice: 340,
    installments: 10,
    installmentValue: 29,
    image: '/src/assets/images/crochet_table_sousplat_1793930031862.jpg',
    secondaryImage: '/src/assets/images/hero_crochet_luxury_1793929436556.jpg',
    rating: 4.9,
    reviewsCount: 88,
    badge: 'Mesa de Luxo',
    description: 'Receba seus convidados com a sofisticação da alta decoração. O Kit Realeza inclui 6 sousplats de 38cm de diâmetro perfeitamente planos, acompanhados de 6 anéis porta-guardanapos com detalhe dourado nobre. O caimento é firme e não amassa, suportando pratos quentes sem manchar.',
    features: [
      'Kit completo com 6 sousplats (38cm) + 6 anéis porta-guardanapos',
      'Trama rendada com acabamento impecável que assenta perfeitamente na mesa',
      'Tratamento impermeabilizante contra respingos e manchas de alimentos',
      'Compatível com pratos rasos, fundos e taças finas',
      'Acompanha caixa especial rígida para guardar com segurança'
    ],
    dimensions: {
      height: 'Diâmetro: 38 cm',
      width: 'Espessura: 4 mm',
      depth: 'Porta-guardanapos: 5 cm',
      weight: '980 g (kit 6 peças)'
    },
    material: 'Fio de algodão mercerizado nobre com toque acetinado',
    hardware: 'Argolas porta-guardanapo com banho dourado verniz cataforético',
    lining: 'Estruturação natural com goma vegetal atóxica',
    colors: [
      { name: 'Champagne & Areia', hex: '#E6D9C5' },
      { name: 'Off-White Nobre', hex: '#F7F5F0' },
      { name: 'Caramelo Rústico', hex: '#A3683B' },
      { name: 'Verde Alecrim', hex: '#879482' }
    ],
    isReadyToShip: true
  },

  // 3. TAPETES & PASSADEIRAS
  {
    id: 'tapete-oval-majestade',
    name: 'Tapete Oval Russo Majestade (1,50m x 0,95m)',
    subtitle: 'Peça nobre para salas e quartos em ponto relevo espiral com gradação harmônica de tons terrosos.',
    category: 'Tapetes & Passadeiras',
    price: 380,
    originalPrice: 475,
    isPromo: true,
    promoDiscountPercent: 20,
    installments: 10,
    installmentValue: 38,
    image: '/src/assets/images/crochet_rug_living_1793930033384.jpg',
    secondaryImage: '/src/assets/images/crochet_kitchen_runner_1793930032511.jpg',
    rating: 5.0,
    reviewsCount: 52,
    badge: 'Super Oferta',
    description: 'Uma verdadeira obra de arte para o centro da sua sala de estar ou aos pés da cama. O Tapete Majestade leva mais de 32 horas de confecção manual, combinando pontos pipoca e tranças em relevo que criam uma textura aconchegante única. Peso substancial de 2,8kg que garante estabilidade no piso.',
    features: [
      'Dimensões amplas: 1,50 metro de comprimento por 95 cm de largura',
      'Gradação de 3 tons harmoniosos: Cru, Areia Nude e Terracota Âmbar',
      'Camada inferior com pontos emborrachados que evitam deslizes',
      'Excelente isolamento térmico e acústico para o ambiente',
      'Fios pesados de algodão reciclado de primeira linha sustentável'
    ],
    dimensions: {
      height: 'Comprimento: 150 cm',
      width: 'Largura: 95 cm',
      depth: 'Espessura: 12 mm',
      weight: '2.800 g'
    },
    material: 'Barbante ecológico nobre 8 fios e fio náutico estruturante',
    hardware: 'Plaquinha de metal banhada a ouro com assinatura Quelle Crochê',
    lining: 'Pontos antiderrapantes termofixados',
    colors: [
      { name: 'Degradê Terracota', hex: '#B8532F' },
      { name: 'Degradê Areia & Cru', hex: '#D7C4B7' },
      { name: 'Monocromático Marfim', hex: '#EFECE6' }
    ],
    isReadyToShip: true
  },

  // 4. TAPETES & PASSADEIRAS (COZINHA)
  {
    id: 'jogo-cozinha-passadeira',
    name: 'Jogo de Cozinha Passadeira Canelada (3 Peças)',
    subtitle: 'Passadeira de 1,40m + 2 tapetes auxiliares de 70cm com franjas artesanais e alta densidade.',
    category: 'Tapetes & Passadeiras',
    price: 310,
    originalPrice: 360,
    installments: 10,
    installmentValue: 31,
    image: '/src/assets/images/crochet_kitchen_runner_1793930032511.jpg',
    secondaryImage: '/src/assets/images/crochet_bathroom_set_1793930031023.jpg',
    rating: 4.9,
    reviewsCount: 63,
    badge: 'Pronta Entrega',
    description: 'Elegância e praticidade para sua cozinha. O jogo canelado protege o piso em frente à pia e ao fogão contra respingos de água e gordura. Os tapetes menores são perfeitos para a geladeira e área de preparo. Não acumula pelos e pode ser lavado facilmente.',
    features: [
      'Jogo com 1 Passadeira Grande (140 x 48 cm) + 2 Tapetes Pequenos (70 x 48 cm)',
      'Trama canelada em ponto alto duplo de alta resistência ao tráfego diário',
      'Franjas artesanais atadas e reforçadas que não soltam na lavagem',
      'Não desbota mesmo com lavagens frequentes'
    ],
    dimensions: {
      height: 'Passadeira: 140x48 cm',
      width: '2x Tapetes: 70x48 cm',
      depth: 'Espessura: 8 mm',
      weight: '1.950 g (trio)'
    },
    material: 'Barbante 100% algodão cru com fios torcidos de alta resistência',
    hardware: 'Etiqueta em couro sintético gravada a laser',
    lining: 'Ponto firme anti-ondulação',
    colors: [
      { name: 'Cru Natural', hex: '#F0EBE1' },
      { name: 'Cinza Granito', hex: '#7A7A7A' },
      { name: 'Areia Dourada', hex: '#D2C1AC' }
    ],
    isReadyToShip: true
  },

  // 5. OFERTAS & PROMOÇÕES
  {
    id: 'kit-sousplat-promo',
    name: 'Kit 4 Sousplats Pérola [Promoção Especial]',
    subtitle: 'Edição limitada em pronta entrega com 25% de desconto. Fio acetinado e ponto espiral nobre.',
    category: 'Ofertas & Promoções',
    price: 185,
    originalPrice: 249,
    isPromo: true,
    promoDiscountPercent: 25,
    installments: 10,
    installmentValue: 18.5,
    image: '/src/assets/images/crochet_table_sousplat_1793930031862.jpg',
    rating: 5.0,
    reviewsCount: 41,
    badge: '25% OFF',
    description: 'Aproveite nossa queima de estoque de pronta entrega com desconto exclusivo de 25%. Kit com 4 sousplats de 36cm na cor Cru Natural. Prontos para envio imediato em até 24 horas.',
    features: [
      '4 Sousplats de 36 cm em pronta entrega imediata',
      '25% de desconto por tempo limitado ou até esgotar o lote',
      'Embalagem para presente perfumada inclusa'
    ],
    dimensions: {
      height: 'Diâmetro: 36 cm',
      width: 'Kit 4 unidades',
      depth: 'Espessura: 4 mm',
      weight: '620 g'
    },
    material: 'Fio de algodão nobre acetinado',
    hardware: 'Embalagem especial do ateliê',
    lining: 'Acabamento firme',
    colors: [
      { name: 'Cru Natural', hex: '#F0EBE1' },
      { name: 'Bege Areia', hex: '#D7C4B7' }
    ],
    isReadyToShip: true
  },

  // 6. BOLSAS & ACESSÓRIOS
  {
    id: 'bolsa-riviera',
    name: 'Bolsa Riviera Náutica Estruturada',
    subtitle: 'Estruturada em ponto leque nobre com alças de mão em couro legítimo pespontado e fecho italiano banhado a ouro.',
    category: 'Bolsas & Acessórios',
    price: 580,
    originalPrice: 650,
    installments: 10,
    installmentValue: 58,
    image: '/src/assets/images/bag_riviera_nautical_1793929437979.jpg',
    secondaryImage: '/src/assets/images/hero_crochet_luxury_1793929436556.jpg',
    rating: 5.0,
    reviewsCount: 48,
    badge: 'Alta Costura',
    description: 'A Bolsa Riviera é o ícone da Quelle Crochê. Criada para quem aprecia a união do artesanato requintado com a imponência de uma bolsa de grife. Sua trama em ponto tridimensional estruturado garante que a peça nunca perca a firmeza. Acompanha tag personalizada com suas iniciais.',
    features: [
      'Estruturação interna rígida que mantém o formato impecável',
      'Fio náutico premium 5mm com acabamento acetinado',
      'Ferragens de alta liga com banho cataforético dourado 18k',
      'Alças em couro legítimo bovino com costura artesanal manual',
      'Pés metálicos de apoio na base para proteger a trama'
    ],
    dimensions: {
      height: '24 cm',
      width: '29 cm',
      depth: '12 cm',
      weight: '680 g'
    },
    material: 'Fio náutico nobre 5mm com polímero anti-desbotamento UV',
    hardware: 'Metais banhados em verniz cataforético dourado 18k',
    lining: 'Cetim estruturado com tratamento repelente a líquidos',
    colors: [
      { name: 'Areia Natural', hex: '#D7C4B7' },
      { name: 'Caramelo Toffee', hex: '#A3683B' },
      { name: 'Terracota Âmbar', hex: '#B8532F' },
      { name: 'Preto Ônix', hex: '#1C1917' }
    ],
    isReadyToShip: true
  },

  {
    id: 'clutch-aurelia',
    name: 'Clutch Aurélia Pérola Noite',
    subtitle: 'Design minimalista para eventos e noites inesquecíveis, com trama canelada de alta densidade e fecho joia.',
    category: 'Bolsas & Acessórios',
    price: 420,
    originalPrice: 470,
    installments: 10,
    installmentValue: 42,
    image: '/src/assets/images/bag_clutch_perola_1793929437741.jpg',
    rating: 4.9,
    reviewsCount: 62,
    badge: 'Edição Noite',
    description: 'A Clutch Aurélia é a joia do artesanato contemporâneo. Confeccionada com fio lurex acetinado e fecho de alta joalheria, acompanha corrente francesa de 115cm removível.',
    features: [
      'Fecho frontal geométrico nobre estilo trava de joalheria',
      'Acompanha corrente francesa banhada a ouro de 115cm removível',
      'Interior espaçoso para smartphones Pro Max e documentos',
      'Ponto fechado ultra-preciso que não deforma'
    ],
    dimensions: {
      height: '14 cm',
      width: '23 cm',
      depth: '5 cm',
      weight: '380 g'
    },
    material: 'Fio nobre metalizado toque de seda com brilho fosco',
    hardware: 'Fecho trava e argolas articuladas banhadas a ouro nobre',
    lining: 'Cetim champagne de alta gramatura',
    colors: [
      { name: 'Champagne Perolado', hex: '#E6D9C5' },
      { name: 'Off-White Puro', hex: '#F7F5F0' },
      { name: 'Dourado Imperial', hex: '#CDB07B' },
      { name: 'Preto Noturno', hex: '#171717' }
    ],
    isReadyToShip: true
  },

  // 7. CURSOS & RECEITAS DIGITAIS
  {
    id: 'curso-bolsa-estruturada',
    name: 'Masterclass: Segredos do Crochê de Luxo (Decoração & Bolsas)',
    subtitle: 'Formação digital completa: jogos de banheiro que não deformam, tapetes russos perfeitos e fornecedores com desconto.',
    category: 'Cursos & Receitas',
    price: 197,
    originalPrice: 397,
    isPromo: true,
    promoDiscountPercent: 50,
    installments: 10,
    installmentValue: 19.7,
    image: '/src/assets/images/artisan_atelier_crochet_1793929438683.jpg',
    rating: 5.0,
    reviewsCount: 310,
    badge: 'Acesso Vitalício',
    description: 'Transforme seu artesanato em peças de alto valor percebido que você pode vender por R$ 250 a R$ 600 cada. Aprenda com Quelle Cristian o método exato de pontos retos, estruturação que não deforma com lavagens e precificação de luxo.',
    features: [
      '36 videoaulas práticas em resolução 4K divididas em 8 módulos',
      'Receitas completas em PDF de Jogos de Banheiro, Sousplats e Tapetes',
      'Lista secreta de fornecedores de barbantes e fios náuticos com desconto',
      'Comunidade fechada de alunas com suporte direto'
    ],
    material: 'Formato 100% digital com acesso imediato e vitalício',
    hardware: 'Certificado de Conclusão Oficial Ateliê Quelle Crochê incluso',
    lining: 'Acesso em aplicativo móvel e computador com aulas liberadas na hora',
    colors: [
      { name: 'Acesso VIP Completo', hex: '#C29B38' }
    ],
    isReadyToShip: true,
    isDigital: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Dra. Carolina Fontes',
    city: 'São Paulo - SP',
    productName: 'Jogo de Banheiro Harmonia (Areia)',
    rating: 5,
    date: '28 de Outubro, 2026',
    comment: 'Receber a caixa do ateliê é uma experiência indescritível! O cheirinho que sobe ao abrir a caixa, os tapetes pesados e macios... O jogo de banheiro encaixou perfeitamente no meu lavabo e não escorrega nada. Meus convidados elogiam toda vez!',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Mariana Guimarães',
    city: 'Belo Horizonte - MG',
    productName: 'Kit Sousplat Mesa Posta Realeza',
    rating: 5,
    date: '15 de Outubro, 2026',
    comment: 'Comprei para o almoço de domingo em família e todos ficaram encantados. A trama é perfeitamente reta, não embicou nada com os pratos e os anéis dourados são um luxo à parte.',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Beatriz Vasconcelos',
    city: 'Curitiba - PR',
    productName: 'Tapete Oval Russo Majestade',
    rating: 5,
    date: '02 de Novembro, 2026',
    comment: 'A perfeição dos pontos da Quelle Crochê não tem igual. O tapete tem um peso incrível, fica retinho no chão de madeira da minha sala e a gradação das cores terracota deu um calor maravilhoso ao ambiente!',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Renata Albuquerque',
    city: 'Rio de Janeiro - RJ',
    productName: 'Masterclass: Segredos do Crochê de Luxo',
    rating: 5,
    date: '22 de Outubro, 2026',
    comment: 'Eu fazia crochê há 5 anos e meus tapetes sempre embabadavam ou ficavam tortos. A técnica da Quelle me ensinou a tensão exata e a estruturação de peças para casa. No primeiro mês vendi 4 jogos de banheiro!',
    verified: true
  }
];

export const FAQS = [
  {
    question: 'Os tapetes e jogos de banheiro escorregam no piso molhado?',
    answer: 'Não! Todas as nossas peças para piso recebem uma camada especial de resina antiderrapante transparente termofixada na base. Isso garante aderência total em porcelanatos, cerâmicas e pisos de madeira, proporcionando segurança para toda a família.'
  },
  {
    question: 'Posso lavar os jogos de banheiro e tapetes na máquina de lavar?',
    answer: 'Sim! Nossas peças são confeccionadas com barbantes ecológicos nobres 100% algodão pré-encolhidos. Você pode lavá-las tranquilamente na máquina no ciclo delicado, utilizando sabão neutro líquido. Não desbota, não solta tinta e não encolhe. Acompanha guia de cuidados em cada pedido.'
  },
  {
    question: 'Os sousplats mancham com molho ou respingos de comida?',
    answer: 'Nossos sousplats e jogos americanos recebem acabamento com tratamento repelente a líquidos leves. Em caso de respingos de molho ou vinho, basta limpar imediatamente com um pano ligeiramente umedecido ou lavar normalmente com água e sabão neutro.'
  },
  {
    question: 'Qual é o prazo de confecção para pedidos sob medida de decoração?',
    answer: 'Peças em "Pronta Entrega" são despachadas em até 24 horas úteis. Para jogos de banheiro ou tapetes sob medida (em medidas ou cores personalizadas para combinar com o seu azulejo ou decoração), nosso prazo de tecelagem manual é de 7 a 10 dias úteis.'
  },
  {
    question: 'Como funciona o Frete Grátis?',
    answer: 'Oferecemos Frete Grátis via transportadora ou Correios (PAC) para todas as compras acima de R$ 450,00 com entrega em todo o território nacional e código de rastreamento enviado diretamente no seu WhatsApp.'
  },
  {
    question: 'Qual a garantia oferecida pelas peças Quelle Crochê?',
    answer: 'Oferecemos garantia de 1 ano contra qualquer defeito de fabricação ou soltura de pontos. Prezamos pela excelência e durabilidade de cada trabalho artesanal que sai do nosso ateliê.'
  }
];
