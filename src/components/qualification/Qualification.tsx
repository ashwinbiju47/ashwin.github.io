import React from 'react'
import './qualification.css'

const Qualification = () => {
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className="qualification__buttons qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__buttons qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>

          <div className="qualification__sections">

            <div className="qualification__content">

              {/* Data 1 */}
              <div className="qualification__data">

                <div>
                  <h3 className="qualification__title">B.Tech: Computer Science and Engineering</h3>
                  <span className="qualification__subtitle">Mar Baselios Institute of Technology and Science, Kothamangalam, Ernakulam, Kerala</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2019-2023
                  </div>
                </div>


                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              {/* Data 2 */}
              {/* <div className="qualification__data">

                <div>

                </div>
                
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title"></h3>
                  <span className="qualification__subtitle"></span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2019-2023
                  </div>
                </div>

              </div> */}

            </div>

            {/* Experience */}
            <div className="qualification__content qualification__content-active ">

              {/* Data 1 */}
              <div className="qualification__data">

                <div>
                  <h3 className="qualification__title">Jr. Software Developer</h3>
                  <span className="qualification__subtitle">Probablity Gaming, Goa, India</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 08/2023 - Present
                  </div>
                </div>


                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

              {/* Data 2 */}
              <div className="qualification__data">

                <div>
                  <h3 className="qualification__title">Full Stack Developer (MERN) </h3>
                  <span className="qualification__subtitle">Freelance</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> 2023
                  </div>
                </div>


                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>

  )
}

export default Qualification