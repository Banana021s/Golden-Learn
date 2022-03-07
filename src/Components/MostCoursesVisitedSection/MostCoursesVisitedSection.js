import "./MostCoursesVisitedSection.css"
import { MagicStar } from "iconsax-react"
import MostCoursesVisitBox from "../MostCoursesVisitedBox/MostCourseVisitBox"

const MostCoursesVisitedSection = () => {
   return (
      <section className="most-visited-courses">
         <h5 className="most-visited-q-title">What Special Courses We Have ?</h5>
         <h1 className="most-visited-title"> <MagicStar color="var(--gold-400)" size="30" variant="Broken" />  The most visited courses </h1>

         <div className="most-visited-courses-wrap">
            <MostCoursesVisitBox />
            <MostCoursesVisitBox />
            <MostCoursesVisitBox />
         </div>

      </section>
   )
}

export default MostCoursesVisitedSection