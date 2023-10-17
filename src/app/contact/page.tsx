import ContactTemplate from "@/ui/templates/ContactTemplate/ContactTemplate"
import { Metadata, NextPage } from "next"

export const metadata: Metadata = {
  title: "Contact Us | B2 Techincal Solutions",
  description:
    "Get in touch for our IAM consulting services based in Northwest Ohio",
}

const ContactPage: NextPage = () => <ContactTemplate />

export default ContactPage
