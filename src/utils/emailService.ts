import { Resend } from 'resend';

// Initialize Resend with API key from environment variable
const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY;

if (!RESEND_API_KEY) {
  throw new Error('VITE_RESEND_API_KEY environment variable is not set');
}

const resend = new Resend(RESEND_API_KEY);

export const sendContactEmail = async (data: { name: string; email: string; message: string }) => {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'quickmvps@gmail.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const subscribeToNewsletter = async (email: string) => {
  try {
    // Send confirmation email to subscriber
    const subscriberResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Welcome to QuickMVP Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9A4EE9;">Welcome to QuickMVP Newsletter! 🚀</h2>
          <p>Thank you for subscribing to our newsletter. You'll be the first to know about:</p>
          <ul>
            <li>New features and services</li>
            <li>MVP development tips</li>
            <li>Special offers and discounts</li>
            <li>Industry insights</li>
          </ul>
          <p>Stay tuned for exciting updates!</p>
          <p>Best regards,<br>The QuickMVP Team</p>
        </div>
      `
    });

    // Notify admin about new subscriber
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'quickmvps@gmail.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    });

    return { success: true, data: subscriberResponse };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
};
