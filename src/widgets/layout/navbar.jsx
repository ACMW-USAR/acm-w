import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, logo,routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 static">
      {/* {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
        
      ))} */}
      <li><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></li>
          <li><Link to="club" spy={true} smooth={true} duration={500}>Clubs</Link></li>
          <li><Link to="team" spy={true} smooth={true} duration={500}>Team </Link></li>
          <li><Link to="event" spy={true} smooth={true} duration={500}>Event </Link></li>
          <li><Link to="joinus" spy={true} smooth={true} duration={500}>JoinUs </Link></li>
          <li><Link to="footermain" spy={true} smooth={true} duration={500}> </Link></li>
       
    </ul>
  );

  return (
    <>
    <div >
    <MTNavbar color="transparent" className="p-3 " >
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {logo && <img src={logo} height="60" width="62" alt="Logo" />}
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
         
          {React.cloneElement(action, {
            className: "hidden lg:inline-block",
          })}
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {/* {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )} */}
          <img
            src="/public/img/bars-icon.jpeg" 
            alt="Custom Icon" 
            className="h-6 w-6" 
          />
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </MobileNav>
    </MTNavbar>
    </div>
    
    </>
    
  );
}

Navbar.defaultProps = {
  brandName: " ACM_W",
  logo: "/public/img/acm_wlogo-removebg-preview.png",
  action: (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfnqkBT-eNIJm7y8rXKfhtKgEV588aF4KoG4QyzYgIH_G5s3w/viewform?usp=sf_link"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        Register
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  logo:PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
