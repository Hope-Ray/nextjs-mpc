import ConditionContent from '@/components/WeTreat/ConditionContent'
import Facilities from '@/components/WeTreat/Facilities'
import ServicesSlide from '@/components/WeTreat/Services'
import Welcome from '@/components/WeTreat/Welcome'
import WhyMpc from '@/components/WeTreat/WhyMpc'
import React from 'react'

const WeTreatPage = () => {
  return (
    <div className=''>
      <Welcome/>
      <ServicesSlide/>
      <ConditionContent/>
      <WhyMpc/>
      <Facilities/>
    </div>
  )
}

export default WeTreatPage