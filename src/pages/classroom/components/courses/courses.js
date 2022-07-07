import React from 'react';
import { CourseCard, Nav } from './components';
import react from '../../../../assets/reactlogo.png'
import ds from '../../../../assets/ds.png';
import mathss from '../../../../assets/nanomathss/maths.png';
import mathsl from '../../../../assets/nanomathsl/mathsl.jpg';
import css from '../../../../assets/nanocss/css.png';
import html from '../../../../assets/nanohtml/html.png';
import aws from '../../../../assets/nanoaws/aws.jpg';

function Courses() {
  const [course, setCourse] = React.useState('INFORMATIQUE');

  React.useEffect(() => {
    // console.log('Choosen:', course);
  }, [course]);

  return (
    <>
      <Nav course={ e => setCourse(e)}/>
      
      {
        course === 'MATHS' && (
          <React.Fragment>
            <CourseCard link={'/hajaniaina-dev/nanomathss'} react={ mathss } title={`Maths Terminale Scientifique`} completion={5} />
            <CourseCard link={'/hajaniaina-dev/nanomathsl'} react={ mathsl } title={`Maths Terminale Litteraire`} completion={0} />
          </React.Fragment>
        )
      }
      
      {
        course === 'INFORMATIQUE' && (
          <React.Fragment>
            <CourseCard link={'/hajaniaina-dev/nanoreact'} react={ react } title={`React Developer`} completion={99} />
            <CourseCard link={'/hajaniaina-dev/nanods'} react={ ds } title={`Data Science with Python`} completion={100} />
            <CourseCard link={'/hajaniaina-dev/nanoaws'} react={ aws } title={`AWS Machine Learning`} completion={30} />
          </React.Fragment>
        )
      }
      
      {
        course === 'COURS GRATUITS' && (
          <React.Fragment>
            <CourseCard link={'/hajaniaina-dev/nanohtml'} react={ html } title={`HTML Basics`} completion={90} />
            <CourseCard link={'/hajaniaina-dev/nanocss'} react={ css } title={`CSS Basics`} completion={10} />
          </React.Fragment>
        )
      }
        
    </>
  )
}

export default Courses;