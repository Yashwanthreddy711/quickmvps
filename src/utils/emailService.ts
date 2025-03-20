import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;

if (!RESEND_API_KEY) {
  throw new Error('VITE_RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(RESEND_API_KEY);

export const sendContactEmail = async (name: string, email: string, message: string) => {
  try {
    console.log('Attempting to send contact email...');
    const data = await resend.emails.send({
      from: 'QuickMVP <onboarding@resend.dev>',
      to: ['quickmvps@gmail.com'],
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, error };
  }
};

export const subscribeToNewsletter = async (email: string) => {
  try {
    console.log('Attempting to send newsletter subscription email...');
    const data = await resend.emails.send({
      from: 'QuickMVP <onboarding@resend.dev>',
      to: ['quickmvps@gmail.com'],
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });
    console.log('Newsletter subscription email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error sending newsletter subscription email:', error);
    return { success: false, error };
  }
};
