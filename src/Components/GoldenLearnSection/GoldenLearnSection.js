import GoldenLearnBox from "./../GoldenLearnBox/GoldenLearnBox"
import "./GoldenLearnSection.css"
import { Star, Message2, Teacher, TruckFast } from "iconsax-react"
import clock from "./clock.png"
import king from "./king.png"
import rocket from "./rocket.png"
import shape from "./svg.svg"
import ContainerCard from "../ContainerCard/ContainerCard"

const GoldenLearnSection = () => {
    return (
        <ContainerCard>
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
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                        icon={ <Message2 color="var(--gold-400" variant="Broken" /> }
                    />
                    <GoldenLearnBox 
                        img={king} 
                        width="320" 
                        height="250" 
                        title="Golden Educations" 
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                        icon={ <Teacher color="var(--gold-400)" variant="Broken" /> }
                    />
                    <GoldenLearnBox 
                        img={rocket} 
                        width="250" 
                        height="250" 
                        title="Golden Progress" 
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                        icon={ <TruckFast color="var(--gold-400)" variant="Broken" /> }
                    />
                </div>
            </section>
        </ContainerCard>
    )
}

export default GoldenLearnSection