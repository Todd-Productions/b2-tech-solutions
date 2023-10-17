import ContactTemplate from "@/ui/templates/ContactTemplate/ContactTemplate"
import { Metadata, NextPage } from "next"
import Head from "next/head"
import { getCanonicalLink } from "../../../utils/common"

export const metadata: Metadata = {
  title: "Contact Us | B2 Techincal Solutions",
  description:
    "Get in touch for our IAM consulting services based in Northwest Ohio",
}

const ContactPage: NextPage = () => (
  <>
    <Head>
      <link rel="canonical" href={getCanonicalLink("/contact")} />
    </Head>
    <ContactTemplate />
  </>
)

export default ContactPage
