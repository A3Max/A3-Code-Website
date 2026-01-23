'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';

interface ContactSalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSalesModal({ isOpen, onClose }: ContactSalesModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  if (typeof window !== 'undefined' && !mounted) {
    setMounted(true);
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length > 150) {
      newErrors.name = 'Name must be less than 150 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 254) {
      newErrors.email = 'Email must be less than 254 characters';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    } else if (formData.company.trim().length > 200) {
      newErrors.company = 'Company must be less than 200 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact-sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setErrors({ form: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', company: '', message: '', honeypot: '' });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen || !mounted) return null;

  if (isSubmitted) {
    return createPortal(
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={handleClose}>
        <div className="bg-white border border-black/10 rounded-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Thanks!</h3>
            <p className="text-lg text-black/70 mb-6">
              A sales representative will reach out to you within 1 business day.
            </p>
            <p className="text-sm text-black/50 mb-6">
              We've sent a confirmation email to {formData.email}
            </p>
            <button
              onClick={handleClose}
              className="w-full px-6 py-3 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={handleClose}>
      <div className="bg-white border border-black/10 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-black/10 p-4 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-[#1a1a1a]">Contact Sales</h3>
          <button onClick={handleClose} className="text-black/60 hover:text-black transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <p className="text-sm text-black/70 mb-6">
            A sales representative will respond within 1 business day.
          </p>

          {errors.form && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="modal-name" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                id="modal-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] transition-colors ${
                  errors.name ? 'border-red-500' : 'border-black/10'
                }`}
                placeholder="Your name"
                maxLength={150}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'modal-name-error' : undefined}
              />
              {errors.name && (
                <p id="modal-name-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Work email <span className="text-red-400">*</span>
              </label>
              <input
                id="modal-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-black/10'
                }`}
                placeholder="you@company.com"
                maxLength={254}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'modal-email-error' : undefined}
              />
              {errors.email && (
                <p id="modal-email-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="modal-company" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Company <span className="text-red-400">*</span>
              </label>
              <input
                id="modal-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] transition-colors ${
                  errors.company ? 'border-red-500' : 'border-black/10'
                }`}
                placeholder="Your company name"
                maxLength={200}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'modal-company-error' : undefined}
              />
              {errors.company && (
                <p id="modal-company-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.company}
                </p>
              )}
            </div>
            
            <div>
              <label htmlFor="modal-message" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="modal-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 bg-white border text-[#1a1a1a] placeholder-black/50 focus:outline-none focus:border-[#306bff] resize-none transition-colors ${
                  errors.message ? 'border-red-500' : 'border-black/10'
                }`}
                placeholder="Tell us about your requirements..."
                minLength={10}
                maxLength={5000}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'modal-message-error' : undefined}
              />
              {errors.message && (
                <p id="modal-message-error" className="mt-2 text-sm text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 text-lg font-semibold bg-[#306bff] text-white hover:bg-[#2555e6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>

            <p className="text-center text-xs text-black/50">
              By submitting this form, you agree to our{' '}
              <a href="/privacy" className="text-[#306bff] hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
