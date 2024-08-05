import AboutUsPage from "./AboutUsPage"
import { Metadata } from 'next'

export const metadata = {
  title: 'About Us',
  description: 'About Us..',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/aboutus',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com/aboutus',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}


const AboutUs = () => {
  return (
    <main>
      <AboutUsPage/>
    </main>
  )
}

export default AboutUs