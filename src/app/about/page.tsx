import { Metadata } from "next"
import Head from "next/head"
import { getCanonicalLink } from "../../../utils/common"
import AboutTemplate from "../../ui/templates/AboutTemplate/AboutTemplate"

export const metadata: Metadata = {
  title: "Sailpoint IdentityIQ Services | B2 Technical Solutions",
  description:
    "Fully insured IDM / IAM based corporation with the fraction of the cost of hiring a typical IT staffing company",
}

const AboutPage = () => (
  <>
    <Head>
      <link rel="canonical" href={getCanonicalLink("/about")} />
    </Head>
    <AboutTemplate />
  </>
)

export default AboutPage
