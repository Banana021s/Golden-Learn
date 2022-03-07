import reactLogo from "./react-logo.png"
import reactWallpaper from "./react-wallpaper.png"
import "./MostCourseVisitBox.css"
import { ArrowRight3, Star1, StarSlash, UserOctagon } from "iconsax-react"

const MostCoursesVisitBox = () => {
   return (
      <article className="most-visited-course-box">
         <div className="most-visited-course-box-logo">
            <img src={reactLogo} alt="" />
         </div>

         <h1 className="most-visited-course-title">React Js</h1>

         <div className="most-visited-course-img-box">
            <img src={reactWallpaper} className="most-visited-course-img" alt="" />

            <div className="most-visited-course-maker-box">
               <h3> <UserOctagon size="20" color="var(--white-100)" /> Maximilian </h3>
               <div className="most-visited-course-rate">
                  <Star1 size="20" color="var(--gold-400)" />
                  <Star1 size="20" color="var(--gold-400)" />
                  <Star1 size="20" color="var(--gold-400)" />
                  <Star1 size="20" color="var(--gold-400)" />
                  <StarSlash size="20" color="var(--gold-400)" />
               </div>
            </div>
         </div>

         <div className="most-visited-course-explain-box">
            <h1 className="most-visited-course-explain-title">Angular - The Complete Guid</h1>
            <p className="most-visited-course-explain-text">
               Master Angular 13 (formerly "Angular 2") and build awesome, reactive web apps with the ...
            </p>
         </div>

         <button className="most-visited-course-more-info-btn">
            More info
            <ArrowRight3 size="30" color="var(--black)" variant="Broken" />
         </button>
      </article>
   )
}

export default MostCoursesVisitBox