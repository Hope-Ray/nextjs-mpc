import TreatmentsPage from "./TreatmentsPage";
import { Metadata } from 'next'


export const metadata = {
  title: 'Treatments',
  description: 'Different Treatments Provided by MPC',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/treatments',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com/treatments',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}

const Treatments = () => {
  return (
    <section>
      <TreatmentsPage/>
    </section>
  );
}

export default Treatments