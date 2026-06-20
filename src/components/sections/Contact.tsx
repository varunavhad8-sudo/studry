'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  preferredTime: z.string().min(1, "Preferred time is required"),
  message: z.string().min(10, "Please provide more details"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitError("");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3e7e564a-60c4-4c04-8ce4-c60aada92c52",
          subject: `New Lead: ${data.name}`,
          from_name: "Agency Portfolio Lead",
          ...data
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full py-32 px-6 bg-white overflow-hidden z-0"
    >
      {/* Animated Fluid Gradient Background (Matching Hero) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>

      {/* Halftone Dot Overlay */}
      <div className="halftone-overlay" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-4 text-foreground tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Ready to <span className="text-blue-500">Elevate</span> Your Brand?
        </motion.h2>

        <motion.p
          className="text-center text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Book a technical consultation. No fluff, just scalable architecture and high-converting design.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row gap-5">
            {/* Name Field */}
            <motion.div className="flex-1" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
              <label className="block text-sm font-semibold text-foreground mb-2 ml-1">Full Name</label>
              <input
                {...register('name')}
                type="text"
                placeholder="John Doe"
                className="w-full px-5 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.name.message}</p>}
            </motion.div>

            {/* Email Field */}
            <motion.div className="flex-1" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
              <label className="block text-sm font-semibold text-foreground mb-2 ml-1">Email Address</label>
              <input
                {...register('email')}
                type="email"
                placeholder="john@company.com"
                className="w-full px-5 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.email.message}</p>}
            </motion.div>
          </div>

          {/* Phone Field */}
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-semibold text-foreground mb-2 ml-1">Phone Number</label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-5 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.phone.message}</p>}
          </motion.div>

          <div className="flex flex-col md:flex-row gap-5">
             {/* Preferred Date */}
             <motion.div className="flex-1" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-semibold text-foreground mb-2 ml-1">Preferred Date</label>
                <input
                  {...register('preferredDate')}
                  type="date"
                  className="w-full px-5 py-4 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                {errors.preferredDate && <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.preferredDate.message}</p>}
             </motion.div>

             {/* Preferred Time */}
             <motion.div className="flex-1" whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-semibold text-foreground mb-2 ml-1">Preferred Time</label>
                <input
                  {...register('preferredTime')}
                  type="time"
                  className="w-full px-5 py-4 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.preferredTime.message}</p>}
             </motion.div>
          </div>

          {/* Message Field */}
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-semibold text-foreground mb-2 ml-1">Project Details</label>
            <textarea
              {...register('message')}
              placeholder="Tell us about your project requirements..."
              rows={4}
              className="w-full px-5 py-4 bg-muted/30 border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1.5 ml-1">{errors.message.message}</p>}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full py-5 mt-4 bg-blue-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:-translate-y-0 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            whileHover={!isSubmitting && !isSuccess ? { scale: 1.01 } : {}}
            whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin w-5 h-5" /> Processing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5" /> Message Sent
              </>
            ) : (
              "Request Consultation"
            )}
          </motion.button>
          
          {/* Status Messages */}
          {submitError && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg text-sm font-medium mt-2">
              <AlertCircle className="w-4 h-4" /> {submitError}
            </motion.div>
          )}
          {isSuccess && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-lg text-sm font-medium mt-2">
              <CheckCircle2 className="w-4 h-4" /> Thank you! Your request has been sent successfully. We will be in touch shortly.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};
