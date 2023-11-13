import aboutData from "@/data/about.json"
import { contactLink } from "@/data/siteMeta"
import { ConnectSection, ServicesSection } from "../../molecules"
import { MainLayout } from "../../organisms"

const AboutTemplate = () => {
  const { connectDescription } = aboutData
  return (
    <MainLayout>
      <ServicesSection />

      <ConnectSection hireLink={contactLink} description={connectDescription} />
    </MainLayout>
  )
}

export default AboutTemplate
