import { Metadata } from "next"
import AboutTemplate from "../../ui/templates/AboutTemplate/AboutTemplate"

export const metadata: Metadata = {
  title: "Corporation Sailpoint IdentityIQ Services | B2 Technical Solutions",
  description:
    "Fully insured IDM / IAM based corporation with the fraction of the cost of hiring a typical IT staffing company",
}

const AboutPage = () => <AboutTemplate />

export default AboutPage
