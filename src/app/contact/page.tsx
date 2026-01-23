'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ContactSalesModal from '@/components/ContactSalesModal';
import Home from '../page';

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    router.push('/');
  };

  return (
    <>
      <Home />
      <ContactSalesModal isOpen={showModal} onClose={handleClose} />
    </>
  );
}
