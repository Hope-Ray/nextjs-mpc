import { motion } from "framer-motion";
import AssessmentsPage from "./AssessmentsPage";
import { Metadata } from 'next'

export const metadata = {
  title: 'Assessments',
  description: 'Different Assessments Provided by MPC',
}

const Assessments = () => {
  

  return (
    <main>
      <AssessmentsPage/>
    </main>
  );
}

export default Assessments