import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
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
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col items-center justify-center p-6 relative overflow-hidden pb-24">
       {/* Background */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
       </div>

       <div className="w-full max-w-md z-10 animate-fade-in-up">
         <button onClick={() => navigate(-1)} className="absolute top-6 left-6 flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
         </button>

         <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-xs font-bold tracking-widest uppercase text-white/80">Open to Roles</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight mb-2">
              Let's Build<br/>
              <span className="text-primary">Something Great.</span>
            </h1>
            <p className="text-slate-400 mt-4 max-w-xs mx-auto text-sm leading-relaxed">
               Have a project in mind or just want to say hi? Send me a message.
            </p>
         </div>

         <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
         >
            <div className="flex flex-col gap-1">
               <input 
                  name="name"
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="h-14 px-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
               />
            </div>
            <div className="flex flex-col gap-1">
               <input 
                  name="email"
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="h-14 px-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
               />
            </div>
            <div className="flex flex-col gap-1">
               <textarea 
                  name="message"
                  placeholder="How can I help you?" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none disabled:opacity-50"
               ></textarea>
            </div>
            
            <button 
               type="submit" 
               disabled={isSubmitting}
               className="h-14 mt-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold tracking-wide shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
               <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
               <span className={`material-symbols-outlined text-[20px] ${isSubmitting ? 'animate-spin' : ''}`}>
                  {isSubmitting ? 'progress_activity' : 'send'}
               </span>
            </button>
         </form>

         {/* Feedback Messages */}
         {status === 'success' && (
            <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center animate-fade-in-up">
               Message sent successfully! I'll get back to you soon.
            </div>
         )}
         {status === 'error' && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center animate-fade-in-up">
               Something went wrong. Please try again or email me directly.
            </div>
         )}

         <div className="flex justify-center gap-6 mt-12">
            <button className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-slate-400">code</span>
            </button>
            <button className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-slate-400">connect_without_contact</span>
            </button>
            <a href="mailto:carljohntruya@gmail.com" className="size-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
               <span className="material-symbols-outlined text-slate-400">alternate_email</span>
            </a>
         </div>
         
         <p className="text-center text-[10px] text-slate-600 mt-8 uppercase tracking-widest">
            © 2024 CJ. Designed & Coded with care.
         </p>
       </div>
    </div>
  );
};
