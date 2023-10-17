import { getCanonicalLink } from "../../../utils/common"
import AboutTemplate from "../../ui/templates/AboutTemplate/AboutTemplate"

export function generateMetadata() {
  return {
    title: "Sailpoint IdentityIQ Services | B2 Technical Solutions",
    description:
      "Fully insured IDM / IAM based corporation with the fraction of the cost of hiring a typical IT staffing company",
    alternates: {
      canonical: getCanonicalLink("about"),
    },
  }
}

const AboutPage = () => <AboutTemplate />

export default AboutPage
