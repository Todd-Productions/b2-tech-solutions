import { Metadata } from "next"
import AboutTemplate from "../../ui/templates/AboutTemplate/AboutTemplate"

export const metadata: Metadata = {
  title: "About B² Technical Solutions",
  description: "Who's Brandon? What is B²?",
}

const AboutPage = () => <AboutTemplate />

export default AboutPage
