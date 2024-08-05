import SubLandingPage from "./SubLandingPage";

export const metadata = {
  title: 'Sublanding',
  description: 'Sub landing..',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/sublanding',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com/sublanding',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}

const SubLanding = () => {
  return (
    <div>
      <SubLandingPage/>
    </div>
  );
};

export default SubLanding;
