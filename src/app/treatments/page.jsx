import TreatmentsPage from "./TreatmentsPage";
import { Metadata } from 'next'


export const metadata = {
  title: 'Treatments',
  description: 'Different Treatments Provided by MPC',
}

const Treatments = () => {
  return (
    <section>
      <TreatmentsPage/>
    </section>
  );
}

export default Treatments