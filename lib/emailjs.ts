import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key from environment variables
if (typeof window !== 'undefined') {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  if (publicKey) {
    emailjs.init(publicKey)
  }
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  service?: string
  urgency?: string
  message: string
  preferredContact?: string
}

interface InspectionFormData {
  fullName: string
  email: string
  phone: string
  propertyAddress: string
  propertyTypes?: string[]
}

/**
 * Send contact form submission via EmailJS
 */
export async function sendContactForm(data: ContactFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID

  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.')
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    company: data.company || 'Not provided',
    service: data.service || 'Not specified',
    urgency: data.urgency || 'normal',
    message: data.message,
    preferred_contact: data.preferredContact || 'phone',
    to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'info@oxfordmechanical.ca',
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams)
  } catch (error) {
    console.error('EmailJS error:', error)
    throw new Error('Failed to send message. Please try again or contact us directly.')
  }
}

/**
 * Send free inspection form submission via EmailJS
 */
export async function sendInspectionForm(data: InspectionFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_INSPECTION_TEMPLATE_ID

  if (!serviceId || !templateId) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.')
  }

  const templateParams = {
    from_name: data.fullName,
    from_email: data.email,
    phone: data.phone,
    property_address: data.propertyAddress,
    property_types: data.propertyTypes?.join(', ') || 'Not specified',
    to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'info@oxfordmechanical.ca',
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams)
  } catch (error) {
    console.error('EmailJS error:', error)
    throw new Error('Failed to send inspection request. Please try again or contact us directly.')
  }
}



