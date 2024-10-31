
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Experiência",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Wordpress",
      icon: backend,
    },
    {
      title: "3D Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Ginasio VF",
      icon: reactjs,
      iconBg: "#E6DEDD",
      
      points: [
        "Iniciação do projeto configurando o ambiente de desenvolvimento e criando a estrutura básica da aplicação com Vite.",
        "Desenvolvimento de componentes reutilizáveis para diferentes seções da web app, como exercícios, planos de treino e perfis de usuários, garantindo uma interface intuitiva e responsiva.",
        "Integreção de APIs externas para obter dados de exercícios e treinos, proporcionando aos usuários informações detalhadas e atualizadas.",
        "Implementação de testes e monitoramento contínuos para assegurar a estabilidade e a performance da aplicação, além de realizar atualizações regulares para adicionar novas funcionalidades.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "CrisBar",
      icon: reactjs,
      iconBg: "#E6DEDD",
      
      points: [
        "Configuração do ambiente de desenvolvimento e iniciei o projeto de encomendas online, criando a estrutura básica da aplicação..",
        "Desenvolvimento de componentes personalizados para o menu, carrinho de compras e histórico de pedidos, garantindo uma interface de usuário intuitiva e responsiva.",
        "Integração de APIs para processar pagamentos e gerenciar o status das encomendas em tempo real, proporcionando uma experiência de usuário fluida e eficiente.",
        "Implementação de testes e monitoramento contínuos para assegurar a estabilidade e a performance da aplicação, além de realizar atualizações regulares para adicionar novas funcionalidades e melhorar a segurança.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "InnoGroup",
      icon: html,
      iconBg: "#383E56",
      
      points: [
        " Arranque do projeto criando um plano detalhado para garantir que todas as etapas fossem bem definidas e organizadas.",
        "Desenvolvimento dos sites utilizando as melhores práticas de design e programação para assegurar uma experiência de usuário intuitiva e eficiente",
        "Realização de testes rigorosos para identificar e corrigir quaisquer problemas, garantindo que o site funcionasse perfeitamente em todos os dispositivos.",
        "Implementação de um sistema de manutenção contínua para monitorar o desempenho do site e realizar atualizações regulares, mantendo-o seguro e atualizado.",
      ],
    },
    {
      title: "3D Designer",
      company_name: "CQ 3Design",
      icon: threejs,
      iconBg: "#E6DEDD",
      
      points: [
        "Utilização de Fusion 360 para importar e modificar modelos 3D precisos e detalhados, que foram posteriormente refinados no Blender",
        "Blender, adicionar texturas e animações aos modelos, garantindo uma apresentação visualmente atraente e dinâmica.",
        "Integreção dos modelos e animações no Three.js, permitindo a visualização interativa e em tempo real diretamente no navegador.",
        "Este projeto demonstrou a eficácia da combinação de Fusion 360, Blender e Three.js para desenvolver aplicações web 3D inovadoras e envolventes",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  