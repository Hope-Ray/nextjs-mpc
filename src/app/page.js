import About from "@/components/About";
import Assessments from "@/components/Assessments";
import Benefits from "@/components/Benefits";
import ConditionsTreat from "@/components/ConditionsWeTreat/ConditionsTreat";
import Testimonials from "@/components/Testimonials/Testimonials";
import Treatments from "@/components/Treatments";
import Welcome from "@/components/Welcome";


export const metadata = {
  title: 'MPC',
  description: 'MPC Description',
  alternates: {
    canonical: 'https://mypainclinicglobal.com',
  },
  openGraph: {
    title: 'Pain Management Clinic & Physiotherapy in Mumbai, Bandra | My Pain Clinic',
    description: `South Asia's largest pain management and physiotherapy clinic in Bandra, Mumbai. Get relief from pain with our personalized treatment plans. Book your appointment today`,
    url: 'https://mypainclinicglobal.com',
    siteName: 'My Pain Clinic',
    images: [
      {
        url: 'https://mypainclinicglobal.com/images/main-slider/banners1.jpg',
      },
    ],
    type: 'website',
  },
}


export default function Home() {  
  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"My Pain Clinic","url":"https://mypainclinicglobal.com","logo":"https://mypainclinicglobal.com/images/logo-mpc.png","contactPoint":{"@type":"ContactPoint","telephone":"8169400905","contactType":"customer service","areaServed":"IN","availableLanguage":"en"},"sameAs":"https://mypainclinicglobal.com"}` }}
        ></script>
      <Welcome/>
      <About/>
      <Treatments/>
      <Assessments/>
      <Benefits/>
      <ConditionsTreat/>
      <Testimonials/>
    </>
  );
}
