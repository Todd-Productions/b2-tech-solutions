import ContactSection from "@/ui/organisms/ContactSection/ContactSection"
import MainLayout from "@/ui/organisms/MainLayout/MainLayout"

import contactData from "../../../data/contact.json"

const ContactTemplate = () => (
  <MainLayout displayHireMobile>
    <ContactSection
      title={contactData.title}
      phone={contactData.phone}
      email={contactData.email}
    />
  </MainLayout>
)

export default ContactTemplate
