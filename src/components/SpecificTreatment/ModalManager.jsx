"use client";

import { useState } from "react";
import AppointmentModal from "./AppointmentModal";

const ModalManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="gap-[1rem] font-semibold rounded-[36px] w-full md:w-auto px-6 py-2  items-center transition border-gradient text-[#fff] hover:scale-105"
      >
        Book an Appointment
      </button>
      <AppointmentModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default ModalManager;
