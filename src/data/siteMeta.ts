import { INavLink } from "@/types"

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

export const footerLinks: INavLink[] = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/b2techOhio/",
  },
  {
    label: "Linkedin",
    url: "https://www.linkedin.com/in/brandonbollin/",
  },
  {
    label: "X (Twitter)",
    url: "https://twitter.com/b2techOhio",
  },
]

export const contactLink: INavLink = {
  label: "HIRE ME",
  url: "/contact",
}
