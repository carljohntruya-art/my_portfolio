import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { MainLayout } from '@/layouts/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { NavBar } from '@/components/NavBar';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

import { PricingCalculator } from '@/components/PricingCalculator';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'spam'>('idle');
  const [formLoadTime] = useState(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // Bot prevention
    honeypot: '',
    // Project specific data from calculator
    appType: '',
    deployment: '',
    complexity: '',
    suggestedPrice: '',
    budget: ''
  });

  const handlePricingChange = (pricingData: any) => {
    setFormData(prev => ({ ...prev, ...pricingData }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // 1. Honeypot check
    if (formData.honeypot) {
      console.warn("Bot detected via honeypot.");
      setStatus('idle');
      return;
    }

    // 2. Time-to-submit check (Prevent instant bot submissions)
    const timeSpent = (Date.now() - formLoadTime) / 1000;
    if (timeSpent < 3) {
      console.warn("Submission too fast. Possible bot.");
      setStatus('idle');
      return;
    }

    // 3. Local Rate Limiting
    const lastSubmit = localStorage.getItem('last_contact_submit');
    if (lastSubmit && (Date.now() - parseInt(lastSubmit)) < 60000) {
      setStatus('spam');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Basic sanitization
      const sanitisedMessage = formData.message.replace(/<[^>]*>?/gm, '');
      const sanitisedName = formData.name.replace(/<[^>]*>?/gm, '');

      const templateParams = {
        from_name: sanitisedName,
        from_email: formData.email,
        message: sanitisedMessage,
        app_type: formData.appType,
        deployment: formData.deployment,
        complexity: formData.complexity,
        suggested_price: formData.suggestedPrice,
        budget: formData.budget,
        timestamp: new Date().toLocaleString(),
        page_source: 'Contact Page with Pricing'
      };

      await emailjs.send(
        (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || '',
        (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      localStorage.setItem('last_contact_submit', Date.now().toString());
      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        honeypot: '',
        appType: '', 
        deployment: '', 
        complexity: '', 
        suggestedPrice: '', 
        budget: '' 
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full h-14 px-5 rounded-xl bg-surface border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50";

  return (
    <MainLayout>
      <NavBar title="Get in Touch" showBack={true} showMenu={false} />
      
      <Container size="sm">
        <Section animate className="pt-12 pb-24">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-bold tracking-widest uppercase text-white/80">Available for Projects</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-4">
              Plan Your Next<br/>
              <span className="text-primary">Great Project.</span>
            </h1>
            <p className="text-text-secondary mt-4 max-w-sm mx-auto text-base leading-relaxed">
               Ready to bring your idea to life? Use the calculator below to estimate costs and send your details.
            </p>
          </motion.div>

          <div className="flex flex-col gap-12">
            {/* Project Price Calculator Section */}
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="bg-white/5 border border-white/5 rounded-3xl p-6 md:p-10"
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2">Project Estimate</h2>
                <p className="text-sm text-text-muted">Tell me about your requirements to get a price range.</p>
              </div>
              <PricingCalculator onSelectionChange={handlePricingChange} />
            </motion.div>

            <motion.form 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2">Contact Information</h2>
                <p className="text-sm text-text-muted">Finalize and send your inquiry.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  name="name"
                  type="text" 
                  placeholder="Your Name" 
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClasses}
                />
                <input 
                  name="email"
                  type="email" 
                  placeholder="Your Email" 
                  required
                  maxLength={100}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={inputClasses}
                />
              </div>

              {/* Honeypot field - Visually hidden to humans */}
              <div className="hidden" aria-hidden="true">
                <input 
                  type="text" 
                  name="honeypot" 
                  tabIndex={-1} 
                  autoComplete="off"
                  maxLength={10}
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              <textarea 
                name="message"
                placeholder="Briefly describe your project goals..." 
                rows={4}
                required
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${inputClasses} h-auto py-5 resize-none`}
              ></textarea>
              
              <Button 
                type="submit" 
                fullWidth
                size="lg"
                isLoading={isSubmitting}
                className="mt-4 shadow-glow"
                rightIcon={!isSubmitting && <span className="material-symbols-outlined text-[20px]">send</span>}
              >
                {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
              </Button>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                  Project inquiry sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'spam' && (
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm text-center">
                  Please wait a minute before sending another message.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                  Something went wrong. Please try again later.
                </div>
              )}
            </motion.form>
          </div>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-6 mt-16"
          >
            <a href="mailto:carljohntruya@gmail.com" className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-slate-400">alternate_email</span>
            </a>
            <a href="https://www.facebook.com/share/184MVUv2Tt/" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <svg className="w-5 h-5 text-slate-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.859-5.978.54 0 4.393.235 4.393.235v3.125h-2.12c-2.32 0-3.02 1.392-3.02 2.92v1.278h3.999l-.5 3.667h-3.499v7.98c-1.637.382-2.973.805-4.832.227" />
               </svg>
            </a>
            {/* Add more social links here */}
          </motion.div>
          
          <p className="text-center text-[10px] text-slate-600 mt-12 uppercase tracking-widest">
            © 2024 CJ. Designed & Coded with care.
          </p>
        </Section>
      </Container>
    </MainLayout>
  );
};

export default Contact;
