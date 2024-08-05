import ServicesPage from "./ServicesPage";
import { Metadata } from 'next'

export const metadata = {
  title: 'Services',
  description: 'Different Services Provided by MPC',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/services',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com/services',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}

const Services = () => {
  return (
    <main>
      <ServicesPage/>
    </main>
  );
}

export default Services