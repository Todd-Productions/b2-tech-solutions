import {
  faTiktok,
  faFacebookF,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { INavLink, IFooterLink } from "@/types"

export const navLinks: INavLink[] = [
  {
    label: "Home.",
    url: ".",
  },
  {
    label: "Work.",
    url: "/#work",
  },
  {
    label: "Services.",
    url: "/identity-access-management-and-it-services",
  },
  {
    label: "About.",
    url: "/about",
  },
]

export const footerLinks: IFooterLink[] = [
  {
    icon: faFacebookF,
    url: "https://www.facebook.com/b2techOhio/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/brandonbollin/",
  },
  {
    icon: faTiktok,
    url: "https://www.tiktok.com/@b2technicalsolutions",
  },
  {
    icon: faYoutube,
    url: "https://www.youtube.com/@B2TechnicalSolutions",
  },
]

export const contactLink: INavLink = {
  label: "HIRE ME",
  url: "/contact",
}
