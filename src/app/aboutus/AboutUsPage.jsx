// import ConditionContent from '@/components/WeTreat/ConditionContent'
import Facilities from '@/components/WeTreat/Facilities'
// import ServicesSlide from '@/components/WeTreat/Services'
import Welcome from '@/components/WeTreat/Welcome'
import WhyMpc from '@/components/WeTreat/WhyMpc'
import AboutUsContent from '@/components/WeTreat/AboutUsContent'
import React from 'react'

const AboutUsPage = () => {
  return (
    <div className=''>
      <Welcome/>
      <AboutUsContent/>
      {/* <ServicesSlide/> */}
      {/* <ConditionContent/> */}
      <WhyMpc/>
      <Facilities/>
    </div>
  )
}

export default AboutUsPage