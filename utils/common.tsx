import { contactLink, footerLinks, navLinks } from "../src/data/siteMeta"

export const getCanonicalLink = (path: string | null) => {
  const site = process.env.SITE_URL || "https://www.b2-tech-solutions.com"
  return path ? `${site}/${path}` : site
}

const getDefaultProps = () => ({
  navLinks,
  footerLinks,
  hireMeLink: contactLink,
})

export default getDefaultProps
