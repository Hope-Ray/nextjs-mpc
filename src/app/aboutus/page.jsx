import AboutUsPage from "./AboutUsPage"
import { Metadata } from 'next'

export const metadata = {
  title: 'About Us',
  description: 'About Us..',
}


const AboutUs = () => {
  return (
    <main>
      <AboutUsPage/>
    </main>
  )
}

export default AboutUs