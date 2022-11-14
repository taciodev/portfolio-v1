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
      "Instagram-like app, dogs a social network for dogs.",
      "I use technologies like redux, and the victory library for graph construction.",
      "Complete login system.",
    ],
    media: <Dogs />,
    live: "https://dogs-taupe.vercel.app",
    repo: "https://github.com/taciodev/dogs",
    id: 2,
  },
];

export default projects;
