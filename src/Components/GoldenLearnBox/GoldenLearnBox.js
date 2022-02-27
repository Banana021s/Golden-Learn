import "./GoldenLearnBox.css"
import { Messages2 } from "iconsax-react"

const GoldenLearnBox = (props) => {
  const { img, width, height, title, text } = props

  return (
    <div className="golden-learn-box">
      <img src={ img } alt="clock" style={{ width: `${width}px`, height: `${height}px` }} /> { /* TODO FIX WITH AND HEIGHT */ }

      <h1 className="golden-learn-box-title">
        <Messages2 color="var(--gold-400)" variant="Broken"/>
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