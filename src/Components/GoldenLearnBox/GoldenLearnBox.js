import "./GoldenLearnBox.css"
import { Messages2 } from "iconsax-react"

const GoldenLearnBox = (props) => {
  const { title, text } = props

  return (
    <div className="golden-learn-box">
      <img src={props.img} alt="clock" /> { /* TODO FIX WITH AND HEIGHT */ }
      <h1 className="golden-learn-box-title">
        <Messages2 color="#EEC423" variant="Broken"/>
        <span> { title.split(" ")[0] } </span>
        { title.split(" ")[1] }
      </h1>
      <p className="golden-learn-box-text">
        { text }
      </p>
    </div>
  )
}

export default GoldenLearnBox