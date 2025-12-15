export const navLinks = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Economia de tempo", href: "#economia" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export const features = [
  {
    icon: "Link",
    title: "Link de agendamento",
    description: "Compartilhe um único link. Clientes escolhem horário e serviço sem precisar falar com você.",
  },
  {
    icon: "RefreshCw",
    title: "Remarcar/cancelar self-service",
    description: "Cliente remarca ou cancela sozinho. Você recebe notificação e o horário volta pra agenda.",
  },
  {
    icon: "Bell",
    title: "Lembretes automáticos",
    description: "WhatsApp 24h e 2h antes. Reduza no-shows em até 70% sem mover um dedo.",
  },
  {
    icon: "Calendar",
    title: "Agenda Hoje/Semana",
    description: "Visualize seus compromissos do dia ou da semana inteira. Simples e direto ao ponto.",
  },
  {
    icon: "Clock",
    title: "Bloqueios e folgas",
    description: "Marque horários indisponíveis, pausas ou dias de folga. O link já exibe só o que está livre.",
  },
  {
    icon: "Sparkles",
    title: "Procedimentos com duração e preço",
    description: "Cadastre seus serviços com tempo e valor. Clientes já sabem o que esperar antes de agendar.",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Compartilhe seu link",
    description: "Cole na bio do Instagram, envie por WhatsApp ou adicione no seu site.",
  },
  {
    step: 2,
    title: "Cliente agenda sozinho",
    description: "Escolhe o serviço, o horário e confirma. Você recebe a notificação.",
  },
  {
    step: 3,
    title: "Só atenda",
    description: "Sem troca de mensagem, sem confirmação manual. Foque no que importa.",
  },
];

export const testimonials = [
  {
    name: "Carla Mendes",
    role: "Esteticista • São Paulo",
    content: "Eu gastava 2 horas por dia só respondendo WhatsApp. Agora mando o link e pronto. Ganhei minha vida de volta.",
    avatar: "CM",
  },
  {
    name: "Juliana Rocha",
    role: "Designer de Sobrancelhas • BH",
    content: "Meus no-shows caíram pela metade depois dos lembretes automáticos. Melhor investimento que fiz.",
    avatar: "JR",
  },
  {
    name: "Fernanda Lima",
    role: "Micropigmentadora • Rio",
    content: "Clientes adoram poder remarcar sozinhas. Menos estresse pra mim, mais profissionalismo pro meu negócio.",
    avatar: "FL",
  },
];

export const faqs = [
  {
    question: "Meus clientes precisam baixar algum app?",
    answer: "Não! O agendamento é feito por um link que abre no navegador. Sem download, sem cadastro complicado.",
  },
  {
    question: "Como funciona o link de agendamento?",
    answer: "Você recebe um link personalizado (ex: glowup.app/carla). É só compartilhar nas redes sociais, WhatsApp ou onde preferir.",
  },
  {
    question: "Consigo bloquear horários de almoço ou dias de folga?",
    answer: "Sim! Você define seus horários de trabalho e pode criar bloqueios para pausas, folgas ou férias.",
  },
  {
    question: "Os lembretes são enviados por onde?",
    answer: "Por WhatsApp automático, 24 horas e 2 horas antes do horário agendado. Você não precisa fazer nada.",
  },
  {
    question: "Funciona no celular?",
    answer: "Totalmente! O GLOWUP foi feito mobile-first. Você gerencia tudo pelo celular, de qualquer lugar.",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Para quem está começando",
    features: [
      "Link de agendamento",
      "Até 30 agendamentos/mês",
      "Agenda básica",
      "1 serviço cadastrado",
    ],
    cta: "Começar grátis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "R$ 49/mês",
    description: "Para profissionais estabelecidos",
    features: [
      "Agendamentos ilimitados",
      "Lembretes por WhatsApp",
      "Remarcação self-service",
      "Serviços ilimitados",
      "Bloqueios e folgas",
      "Suporte prioritário",
    ],
    cta: "Quero o Pro",
    highlighted: true,
  },
];
