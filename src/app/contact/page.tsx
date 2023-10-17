import ContactTemplate from "@/ui/templates/ContactTemplate/ContactTemplate"
import { Metadata, NextPage } from "next"

export const metadata: Metadata = {
  title: "Contact B² Tech Solutions for Expert Solutions",
  description: "Get in touch with B² Tech Solutions",
}

const ContactPage: NextPage = () => <ContactTemplate />

export default ContactPage
