import { motion } from "framer-motion";
import AssessmentsPage from "./AssessmentsPage";
import { Metadata } from 'next'

export const metadata = {
  title: 'Assessments',
  description: 'Different Assessments Provided by MPC',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/assessments',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com/assessments',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}

const Assessments = () => {
  

  return (
    <main>
      <AssessmentsPage/>
    </main>
  );
}

export default Assessments