import "./hero.css"
import { UrlType } from "../../../types"

export interface HeroProps {
  img: UrlType
}

const Hero: React.FC<HeroProps> = (props) => {
  const { img } = props
  return <div className="hero" style={{ backgroundImage: `url(${img})` }} />
}

export default Hero
