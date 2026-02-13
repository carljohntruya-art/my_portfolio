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

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        timestamp: new Date().toLocaleString(),
        page_source: 'Contact Page'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
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
        <Section animate className="pt-12">
          <motion.div variants={fadeInUp} initial="initial" animate="animate" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-bold tracking-widest uppercase text-white/80">Open to Roles</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-4">
              Let's Build<br/>
              <span className="text-primary">Something Great.</span>
            </h1>
            <p className="text-text-secondary mt-4 max-w-xs mx-auto text-base leading-relaxed">
               Have a project in mind or just want to say hi? Send me a message.
            </p>
          </motion.div>

          <motion.form 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input 
              name="name"
              type="text" 
              placeholder="Your Name" 
              required
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
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={inputClasses}
            />
            <textarea 
              name="message"
              placeholder="How can I help you?" 
              rows={4}
              required
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
              className="mt-2 shadow-glow"
              rightIcon={!isSubmitting && <span className="material-symbols-outlined text-[20px]">send</span>}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </div>
            )}
          </motion.form>

          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="flex justify-center gap-6 mt-16"
          >
            <a href="mailto:carljohntruya@gmail.com" className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-slate-400">alternate_email</span>
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
