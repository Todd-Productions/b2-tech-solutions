import { getCanonicalLink } from "../../../utils/common"
import { ServicesTemplate } from "../../ui/templates"

export function generateMetadata() {
  return {
    title: "Identity and Access Management Services | B2 Technical Solutions",
    description:
      "Identity and Access Management Services for SMBs and Large Enterprises",
    alternates: {
      canonical: getCanonicalLink("services"),
    },
  }
}

const ServicesPage = () => <ServicesTemplate />

export default ServicesPage
