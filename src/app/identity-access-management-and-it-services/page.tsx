import { getCanonicalLink } from "../../../utils/common"
import { ServicesTemplate } from "../../ui/templates"

export function generateMetadata() {
  return {
    title: "IT Support, IAM & IDAM Services | B2 Technical Solutions",
    description:
      "Identity, Access Management, and IT Support Services for large and small businesses.",
    alternates: {
      canonical: getCanonicalLink("identity-access-management-and-it-services"),
    },
  }
}

const ServicesPage = () => <ServicesTemplate />

export default ServicesPage
