import servicesData from "@/data/services.json"
import { contactLink } from "@/data/siteMeta"
import { ConnectSection, ServicesSection } from "../../molecules"
import { MainLayout } from "../../organisms"

const ServicesTemplate = () => {
  const { heading, services, connectDescription } = servicesData
  return (
    <MainLayout>
      <ServicesSection heading={heading} services={services} />

      <ConnectSection hireLink={contactLink} description={connectDescription} />
    </MainLayout>
  )
}

export default ServicesTemplate
