// import { Home, Profile, SignIn, SignUp } from "@/pages";

import Index from "./pages/Homepage";


export const routes = [
  // {
  //   icon: HomeIcon,
  //   name: "home",
  //   path: "/home",
  //   element: <Index />,
  // },
  // {
  //   icon: UserCircleIcon,
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
 

  {
    
    name: "Homepage",
    path: "/Homepage",
    element: <Index />,

  },
  
];

export default routes;
