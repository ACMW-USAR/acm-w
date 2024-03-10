// import { Home, Profile, SignIn, SignUp } from "@/pages";

import Index from "./pages/Homepage";
import About from "./pages/about";
export const routes = [
  {
    name: "Aboutpage",
    path: "/about",
    element: <About />,
  },

  {
    name: "Homepage",
    path: "/Homepage",
    element: <Index />,
  },
];

export default routes;
