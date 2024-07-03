import { Metadata } from 'next'
import ContactUsPage from "./ContactUsPage";

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us on the Contact Page',
}

const ContactPage = () => {
  return (
    <>
      <ContactUsPage/>
    </>
  );
}

export default ContactPage