export const EVENT_SLUG = "dominando-o-bitcoin" as const;

export const EVENT_PATH = `/eventos/${EVENT_SLUG}`;

/** Slugs antigos — redirecionam para EVENT_PATH */
export const EVENT_SLUG_LEGACY =
  "caminho-soberano-dominando-o-bitcoin-na-pratica" as const;

export const EVENT_SLUG_PREVIOUS =
  "caminho-soberano-dominando-o-bitcoin" as const;

export const eventMeta = {
  title: "Caminho Soberano: Dominando o Bitcoin na Prática",
  location: "São Paulo - SP",
  dateShort: "18 a 21 de novembro",
  dateFull: "18 a 21 de novembro",
  time: "08:00 às 19:00",
  edition: "2ª Edição",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197546186984!2d-46.655981!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
};

export const scheduleUrl =
  "https://docs.google.com/spreadsheets/d/1l24YFp3SYMmpsWmUJlIVPJIzJeFkxpc7/edit?usp=sharing&ouid=107925772152343817361&rtpof=true&sd=true";

export const audiences = [
  {
    label: "Profissionais Liberais",
    icon: "person" as const,
    description:
      "Médicos, advogados, engenheiros e autônomos que querem proteger o fruto do próprio trabalho.",
  },
  {
    label: "Pró-Liberdade",
    icon: "lock" as const,
    description:
      "Quem busca soberania individual e rejeita viver sob tutela estatal ou bancária.",
  },
  {
    label: "Conservadores",
    icon: "anchor" as const,
    description:
      "Pessoas que valorizam patrimônio, família e independência financeira de longo prazo.",
  },
  {
    label: "CACs",
    icon: "id" as const,
    description:
      "Colecionadores, atiradores e caçadores alinhados à defesa da liberdade e da propriedade.",
  },
  {
    label: "Empresários",
    icon: "briefcase" as const,
    description:
      "Donos de negócio que precisam de estratégias reais para blindar e expandir capital.",
  },
];

export const eventBenefits = [
  {
    title: "Bitcoin na prática",
    description:
      "Do zero à autocustódia: wallets, segurança, operação real e erros que custam caro.",
    icon: "bitcoin" as const,
    image: "/images/gallery/gallery-06.jpg",
    tags: ["Wallets", "Autocustódia", "Operação real"],
  },
  {
    title: "Proteção patrimonial",
    description:
      "Estratégias para blindar seu patrimônio e reduzir exposição a bloqueios e confiscos.",
    icon: "shield" as const,
    image: "/images/gallery/gallery-09.jpg",
    tags: ["Blindagem", "Menos risco", "Patrimônio seguro"],
  },
  {
    title: "Networking soberano",
    description:
      "Conexão direta com lideranças, empresários e rede pró-liberdade de todo o Brasil.",
    icon: "network" as const,
    image: "/images/gallery/gallery-08.jpg",
    tags: ["Conexões reais", "Negócios", "Comunidade"],
  },
  {
    title: "Independência financeira",
    description:
      "Clareza para separar seu dinheiro do Estado e construir autonomia com Bitcoin.",
    icon: "freedom" as const,
    image: "/images/gallery/gallery-03.png",
    tags: ["Autonomia", "Soberania", "Liberdade"],
  },
  {
    title: "Imersão presencial",
    description:
      "Quatro dias intensivos, com palestras, prática e ambiente para tirar dúvidas ao vivo.",
    icon: "users" as const,
    image: "/images/gallery/gallery-11.webp",
    tags: ["Presencial", "Prática", "Dúvidas ao vivo"],
  },
  {
    title: "Conteúdo estratégico",
    description:
      "Visão filosófica e operacional sobre soberania, sem enrolação e sem teoria solta.",
    icon: "compass" as const,
    image: "/images/gallery/gallery-02.png",
    tags: ["Filosofia", "Estratégia", "Aplicável"],
  },
];

export const exclusiveBonuses = [
  {
    title: "Grupo VIP de WhatsApp",
    description:
      "Acesso ao grupo VIP exclusivo dos participantes: networking contínuo, trocas de oportunidades e suporte direto depois do evento.",
    icon: "group" as const,
    badge: "Bônus 01",
    image: "/images/gallery/gallery-01.png",
    tags: ["WhatsApp VIP", "Networking", "Pós-evento"],
  },
  {
    title: "Descontos no portfólio Caminho Soberano",
    description:
      "Condição especial de desconto em produtos e formações futuras do portfólio Caminho Soberano, benefício exclusivo para quem participar deste evento.",
    icon: "discount" as const,
    badge: "Bônus 02",
    image: "/images/gallery/gallery-05.png",
    tags: ["Descontos", "Portfólio", "Exclusivo"],
  },
];

export const ticketBenefits = [
  "Domínio completo da legislação de armamento civil",
  "Estratégias reais de proteção patrimonial e independência financeira",
  "Formação prática em associativismo",
  "Acesso direto a uma rede nacional de lideranças, CACs e empresários pró-liberdade",
  "Clareza filosófica e estratégica sobre soberania individual",
];

export const tickets = [
  {
    id: "bronze",
    name: "Ingresso Bronze",
    price: "R$ 297",
    featured: false,
  },
  {
    id: "prata",
    name: "Ingresso Prata",
    price: "R$ 997",
    featured: false,
  },
  {
    id: "ouro",
    name: "Ingresso Ouro",
    price: "R$ 1.497",
    featured: true,
  },
] as const;

export const speakers = [
  {
    name: "Tarcísio Machado",
    image: "/images/events/dominando-bitcoin/speakers/tarcisio.jpg",
    instagram: "https://www.instagram.com/tarcisiomprado/",
    twitter: "https://x.com/tarcisiomprado",
    bio: "Engenheiro, empresário e fundador do Caminho Soberano. Com fé e visão de longo prazo, ensina soberania financeira na prática: como sair da dependência estatal e bancária e usar o Bitcoin como ferramenta real de liberdade, patrimônio e autonomia.",
  },
  {
    name: "Elídio Segundo",
    image: "/images/events/dominando-bitcoin/speakers/elidio.jpg",
    instagram: "https://www.instagram.com/elidiosegundo/",
    twitter: "https://x.com/elidiosegundo",
    bio: "Chegou ao Bitcoin por necessidade: proteger patrimônio de bloqueios arbitrários. Hoje é referência em autocustódia, anonimização, empréstimos colateralizados e alavancagem. Ensina estratégias práticas para blindar o dinheiro e construir riqueza fora do sistema.",
  },
  {
    name: "Rafael Castaneda",
    image: "/images/events/dominando-bitcoin/speakers/rafael.jpeg",
    instagram: "https://www.instagram.com/castacrypto/",
    twitter: "https://x.com/castacrypto",
    bio: "Co-fundador e COO da Oxus Finance. Mestre pelo IME-RJ, com mais de 20 anos em engenharia de software e liderança técnica. Coordenador do palco crypto do Blockchain Rio e voz constante nos principais eventos de blockchain da América Latina.",
  },
  {
    name: "Gabriel Della",
    image: "/images/events/dominando-bitcoin/speakers/gabriel.jpg",
    instagram: "https://www.instagram.com/criptobrasilofc/",
    twitter: "https://x.com/CriptoBrasilOFC",
    bio: "Sócio da Vault Capital, analista de mercado e educador. Especialista em Bitcoin e altcoins, com mais de R$ 60 milhões sob gestão. Parceiro do Mercado Bitcoin e criador de conteúdo sobre soberania financeira e descentralização.",
  },
  {
    name: "Guilherme Campos",
    image: "/images/events/dominando-bitcoin/speakers/guilherme.png",
    instagram: "https://www.instagram.com/guicampossc/",
    twitter: "https://x.com/GuiCamposOF",
    bio: "Empreendedor e líder da DSec Labs. Atua em operações, produto e expansão no ecossistema DeFi. Transforma ideias complexas em soluções escaláveis, unindo blockchain, modelo de negócio e resultado concreto.",
  },
  {
    name: "Leonardo Maximiliano",
    image: "/images/events/dominando-bitcoin/speakers/leonardo.png",
    instagram: "https://www.instagram.com/leommaximiliano/",
    twitter: "https://x.com/leommaximiliano",
    bio: "Founder da Decentralized Security Labs (DSEC). Especialista em Web3 e autocustódia, cria produtos que removem intermediários (Domini Pay, John Galt P2P, Alfred Space e ColdKit) para devolver controle total de ativos e dados a pessoas e empresas.",
  },
  {
    name: "Vinicius Silva Brito",
    image: "/images/events/dominando-bitcoin/speakers/vinicius.jpeg",
    instagram: "https://www.instagram.com/tartaruga.br/",
    twitter: "https://x.com/tartaruga_br",
    bio: "Conhecido como @tartaruga.br, deixou a carreira estável para viver como nômade digital dos próprios investimentos. Diretor Comercial na D Security Lab, entrega soberania ao usuário final com soluções físicas e tecnológicas de autocustódia e privacidade.",
  },
];
