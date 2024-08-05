import { Metadata } from 'next'
import ContactUsPage from "./ContactUsPage";

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us on the Contact Page',
  alternates: {
    canonical: 'https://mypainclinicglobal.com/contactus',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com/contactus',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}

const ContactPage = () => {
  return (
    <>
      <ContactUsPage/>
    </>
  );
}

export default ContactPage