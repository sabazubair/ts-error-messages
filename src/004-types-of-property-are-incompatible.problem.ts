// type RoutingConfig = {
//   routes: {
//     path: string;
//     component: string;
//   }[];
// };

// const createRoutes = (config: RoutingConfig) => {};

const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
};

const createRoutes = (config: {
  routes: {
    path: string;
    component: string;
  }[];
}) => {};

createRoutes(routingConfig);
