import About from "@/components/About";
import Assessments from "@/components/Assessments";
import Benefits from "@/components/Benefits";
import ConditionsTreat from "@/components/ConditionsWeTreat/ConditionsTreat";
import Testimonials from "@/components/Testimonials/Testimonials";
import Treatments from "@/components/Treatments";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
