import ContactTemplate from "@/ui/templates/ContactTemplate/ContactTemplate"
import { NextPage } from "next"
import { getCanonicalLink } from "../../../utils/common"

export function generateMetadata() {
  return {
    title: "Contact Us | B2 Techincal Solutions",
    description:
      "Get in touch for our IAM consulting services based in Northwest Ohio",
    alternates: {
      canonical: getCanonicalLink("contact"),
    },
  }
}

const ContactPage: NextPage = () => <ContactTemplate />

export default ContactPage
