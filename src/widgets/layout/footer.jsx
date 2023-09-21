import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "ACMW USS Student Chapter",
  description:
    "The GGSIP University USS ACM Student Chapter is an official student body incepted in 2023 under the University School USAR , GGSIPU.",
  socials: [
    {
      color: "blue",
      name: "Gmail",
      path: "ggsipuacmw@gmail.com",
    },
    {
      color: "light-blue",
      name: "twitter",
      path: "https://twitter.com/UssAcmW",
    },
    {
      color: "purple",
      name: "instagram",
      path: "https://www.instagram.com/ggsipu_acmw/",
    },
    {
      color: "pink",
      name: "linkedIn",
      path: "https://www.linkedin.com/company/93220388/admin/feed/posts/",
    },
    // {
    //   color: "red",
    //   name: "youtube",
    //   path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    // },
    // {
    //   color: "black",
    //   name: "github",
    //   path: "https://github.com/creativetimofficial/material-tailwind",
    // },
  ],
  menus: [
    {
      name: "Quick links",
      items: [
        { name: "IPU USAR-Home", path: "http://www.ipu.ac.in/usar/" },
        { name: "ACM-W-India", path: "https://india.acm.org/acm-w-india" },
        {
          name: "ACM turing award",
          path: "https://amturing.acm.org/",
        },
        {
          name: "Join ACMW",
          path: "",
        },
      ],
    },
    // {
    //   name: "other resources",
    //   items: [
    //     {
    //       name: "MIT License",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
    //     },
    //     {
    //       name: "Contribute",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
    //     },
    //     {
    //       name: "Change Log",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
    //     },
    //     {
    //       name: "Contact Us",
    //       path: "https://creative-tim.com/contact-us?ref=mtk",
    //     },
    //   ],
    // },
  ],
  copyright: (
    <>
      © Conceptualized, Designed and Developed by Office Bearers of GGSIP University USS ACMW Student Chapter{" "}
      
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
