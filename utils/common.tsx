import { contactLink, footerLinks, navLinks } from "../src/data/siteMeta"

export const getCanonicalLink = (path: string) => {
  const site = process.env.SITE_URL || "https://www.b2-tech-solutions.com"
  return `${site}/${path}`
}

const getDefaultProps = () => ({
  navLinks,
  footerLinks,
  hireMeLink: contactLink,
})

export default getDefaultProps
