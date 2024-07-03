import ServicesPage from "./ServicesPage";
import { Metadata } from 'next'

export const metadata = {
  title: 'Services',
  description: 'Different Services Provided by MPC',
}

const Services = () => {
  return (
    <main>
      <ServicesPage/>
    </main>
  );
}

export default Services