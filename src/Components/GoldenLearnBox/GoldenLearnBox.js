import "./GoldenLearnBox.css"

const GoldenLearnBox = (props) => {
  const { img, width, height, title, text, icon } = props
  const GoldTitle = title.split(" ")[0]
  const normalTitle = title.split(" ")[1]

  return (
    <div className="golden-learn-box">
      <img src={ img } alt="clock" style={{ width: `${width}px`, height: `${height}px` }} />

      <h1 className="golden-learn-box-title">
        { icon } <span> { GoldTitle } </span> { normalTitle }
      </h1>

      <p className="golden-learn-box-text">
        { text }
      </p>
    </div>
  )
}

export default GoldenLearnBox