import React, { useState } from 'react';
import { XCircle, MessageCircleCode, Send, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [idea, setIdea] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setStep(1);
    setError('');
    setIsSubmitSuccess(false);
  };

  const nextStep = () => {
    if (step === 1 && (!name || !email)) {
      setError("Please enter your name and email to proceed.");
      return;
    }
    setStep(step + 1);
    setError('');
  };

  const prevStep = () => {
    setStep(step - 1);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !idea) {
      setError("Please fill in all required fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { sendContactEmail } = await import('../utils/emailService');
      const result = await sendContactEmail({
        name,
        email,
        message: `Phone: ${phone || 'Not provided'}\n\nIdea: ${idea}`
      });
      
      if (result.success) {
        setIsSubmitSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setIdea('');
        setStep(1);
      } else {
        if (result.error?.includes('CORS')) {
          setError('Unable to send email due to CORS policy. Please try again later.');
        } else {
          setError(`Failed to send: ${result.error}`);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error && error.message.includes('CORS')) {
        setError('Unable to send email due to CORS policy. Please try again later.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Open Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={toggleChat}
            className="bg-premium-gradient text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-4 hover:scale-110"
          >
            <MessageCircleCode size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-premium-gradient py-4 px-6 flex items-center justify-between">
              <h5 className="text-lg font-semibold text-white">
                {isSubmitSuccess ? "Thank you!" : "Let's talk about your MVP"}
              </h5>
              <button 
                onClick={toggleChat} 
                className="text-white/80 hover:text-white transition-colors"
              >
                <XCircle className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Received!</h3>
                  <p className="text-gray-600">
                    We've received your message and will get back to you shortly!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                              placeholder="Your Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2">
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                              placeholder="Your Phone (Optional)"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="mt-6 w-full bg-premium-gradient hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <span>Next</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="mb-6">
                          <label htmlFor="idea" className="block text-gray-700 text-sm font-medium mb-2">
                            Tell us about your MVP idea *
                          </label>
                          <textarea
                            id="idea"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 h-32 resize-none"
                            placeholder="Describe your MVP idea"
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-between space-x-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back</span>
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex-1 bg-premium-gradient hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                              isSubmitting ? 'opacity-50 cursor-wait' : ''
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <span>Sending...</span>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              </>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-4 bg-red-50 p-3 rounded-lg"
                    >
                      {error}
                    </motion.p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
