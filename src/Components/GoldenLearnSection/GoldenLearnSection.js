import GoldenLearnBox from "./../GoldenLearnBox/GoldenLearnBox"
import "./GoldenLearnSection.css"
import { Star } from "iconsax-react"
import clock from "./clock.png"
import king from "./king.png"
import rocket from "./rocket.png"
import shape from "./svg.svg"

const GoldenLearnSection = () => {
    return (
        <section className="golden-learn-section">
            <img src={ shape } alt="" className="shape shape_one" />
            <img src={ shape } alt="" className="shape shape_two" />
            
            <h5 className="goldenlearn-q-title">What special do we have ?</h5>
            <h1 className="goldenlearn-title"> <Star color="var(--gold-400)" size="30" variant="Broken"/> Why <span>Golden</span> learn ?</h1>
            <div className="golden-learn-boxes">
                <GoldenLearnBox 
                    img={clock} 
                    width="250" 
                    height="250" 
                    title="Golden Support" 
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <GoldenLearnBox 
                    img={king} 
                    width="320" 
                    height="250" 
                    title="Golden Educations" 
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <GoldenLearnBox 
                    img={rocket} 
                    width="250" 
                    height="250" 
                    title="Golden Progress" 
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            </div>
        </section>
    )
}

export default GoldenLearnSection