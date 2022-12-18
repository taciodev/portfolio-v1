import React from "react";
import { Dogs, PortfolioImg } from "../../assets/images";

const projects = [
  {
    name: "This Site",
    info: [
      "Built with React using parcel bundler for it's no-config approach.",
      "Using Chakra UI to build the UI.",
      "Using storybook for visual testing and building reusable components.",
      "Going forward, I'm hoping to integrate Gatsby for it's SEO, MDX & SSG features.",
    ],
    media: <PortfolioImg />,
    live: null,
    // need to update to current site url once site goes public
    repo: null,
    id: 1,
  },
  {
    name: "dogs",
    info: [
      "Projeto do curso 'React Completo' da Origamid, utilizando Redux com React.",
      "Dogs, uma rede social para cachorros.",
      "Na página do usuário, é possível visualizar o seu feed, postar fotos e acessar as estatísticas de visualizações.",
      "Funciona como PWA (Progressive Web App), podendo ser utilizado como um aplicativo.",
    ],
    media: <Dogs />,
    live: "https://dogs-taupe.vercel.app",
    repo: "https://github.com/taciodev/dogs",
    id: 2,
  },
];

export default projects;
