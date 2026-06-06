// EmailJS Configuration
// Sign up at https://www.emailjs.com/ (Free: 200 emails/month)
// 
// SETUP STEPS:
// 1. Go to emailjs.com and create an account
// 2. Add an Email Service (Gmail recommended) -> You'll get a SERVICE_ID
// 3. Create Email Templates (see below) -> You'll get TEMPLATE_IDs
// 4. Get your Public Key from Account > API Keys
// 5. Replace the values below with your actual credentials
//
// IMPORTANT: Set the recipient email in your EmailJS template to: shreenathkrupacabs@gmail.com
// Or use the {{to_email}} variable in template "To Email" field

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_hxk46op',
  TEMPLATE_BOOKING: 'template_ay0t9a4',
  TEMPLATE_CALLBACK: 'template_ay0t9a4',
  TEMPLATE_CONTACT: 'template_ay0t9a4',
  PUBLIC_KEY: 'gtZArW0gBnv3YeA8G',
  RECIPIENT_EMAIL: 'shreenathkrupacabs@gmail.com'
}

// ========== EMAIL TEMPLATE SUGGESTIONS ==========
//
// TEMPLATE: template_skc_booking
// Subject: New Cab Booking - {{name}}
// Content:
//   New Booking Request Received!
//   Name: {{name}}
//   Phone: {{phone}}
//   Pickup: {{pickup}}
//   Drop: {{drop}}
//   Date: {{date}}
//   Time: {{time}}
//   Cab Type: {{cabType}}
//   Form Type: {{form_type}}
//
// TEMPLATE: template_skc_callback
// Subject: Callback Request - {{name}}
// Content:
//   New Callback Request!
//   Name: {{name}}
//   Phone: {{phone}}
//   Email: {{email}}
//   Pickup: {{pickup}}
//   Drop: {{drop}}
//   Travel Date: {{travelDate}}
//   Cab Type: {{cabType}}
//   Message: {{message}}
//
// TEMPLATE: template_skc_contact
// Subject: Contact Message - {{subject}}
// Content:
//   New Contact Message!
//   Name: {{name}}
//   Phone: {{phone}}
//   Email: {{email}}
//   Subject: {{subject}}
//   Message: {{message}}
//
// For all templates, set "To Email" to: kumbharnr777@gmail.com
// Or use the hidden field {{to_email}} from the forms
