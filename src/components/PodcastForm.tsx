"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, Trophy, MessageSquare, Calendar, Mic, AlertCircle } from "lucide-react";
import { useState } from "react";

const N8N_PODCAST_WEBHOOK = "https://n8n.srv1269070.hstgr.cloud/webhook/1a2e5d59-58af-4b9a-93a0-a1bf15183a57";

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  sport: string;
  story: string;
  availability: string;
}

interface PodcastFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PodcastForm({ isOpen, onClose }: PodcastFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    sport: "",
    story: "",
    availability: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(N8N_PODCAST_WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "podcast",
          submittedAt: new Date().toISOString(),
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);

      // Reset after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", age: "", sport: "", story: "", availability: "" });
        onClose();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sports = [
    "Football",
    "Basketball",
    "Soccer",
    "Baseball",
    "Softball",
    "Volleyball",
    "Track & Field",
    "Wrestling",
    "Swimming",
    "Tennis",
    "Golf",
    "Lacrosse",
    "Hockey",
    "Gymnastics",
    "Cheer",
    "Dance",
    "Other",
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg z-50 overflow-auto"
          >
            <div className="card-neon rounded-3xl p-6 md:p-8 h-full md:h-auto max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Mic className="w-5 h-5 text-[#03fd1c]" />
                    <h2 className="text-2xl font-bold text-white">Join the Podcast</h2>
                  </div>
                  <p className="text-gray-400 text-sm">
                    With Cosette Abeyta
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#03fd1c]/30 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#03fd1c] transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-[#03fd1c] mx-auto mb-4 flex items-center justify-center"
                  >
                    <Mic className="w-10 h-10 text-black" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#03fd1c] mb-2">Application Submitted!</h3>
                  <p className="text-gray-400">We&apos;ll reach out to schedule your episode.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-3 rounded-xl"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input w-full px-4 py-3 rounded-xl"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input w-full px-4 py-3 rounded-xl"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Age & Sport Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Age *
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="13"
                        max="99"
                        className="form-input w-full px-4 py-3 rounded-xl"
                        placeholder="Your age"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Trophy className="w-4 h-4 inline mr-2" />
                        Sport *
                      </label>
                      <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        required
                        className="form-input w-full px-4 py-3 rounded-xl appearance-none cursor-pointer"
                      >
                        <option value="">Select sport</option>
                        {sports.map((sport) => (
                          <option key={sport} value={sport}>
                            {sport}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Story */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Your Story (Brief) *
                    </label>
                    <textarea
                      name="story"
                      value={formData.story}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="form-input w-full px-4 py-3 rounded-xl resize-none"
                      placeholder="Tell us about the story you'd like to share on the podcast..."
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Availability *
                    </label>
                    <textarea
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="form-input w-full px-4 py-3 rounded-xl resize-none"
                      placeholder="When are you generally available for recording? (e.g., Weekday evenings, Saturday mornings)"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-neon w-full py-4 rounded-xl text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Apply for Podcast
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
