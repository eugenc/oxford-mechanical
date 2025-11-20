# EmailJS Email Templates

This directory contains HTML email templates for EmailJS integration with Oxford Mechanical's contact and inspection forms.

## Templates

### 1. Contact Form Template (`contact-form-template.html`)
Used for general contact form submissions from the website.

**Template Variables:**
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number
- `{{company}}` - Company/property name
- `{{service}}` - Service requested
- `{{urgency}}` - Urgency level (emergency, urgent, normal)
- `{{message}}` - Message content
- `{{preferred_contact}}` - Preferred contact method (phone/email)

### 2. Inspection Form Template (`inspection-form-template.html`)
Used for free inspection form submissions.

**Template Variables:**
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number
- `{{property_address}}` - Full property address
- `{{property_types}}` - Comma-separated list of selected property types

## Brand Colors Used

- **Primary Blue**: `#0037ff` (Oxford Blue)
- **Primary Blue Dark**: `#002edb`
- **Accent Green**: `#9cc59e`
- **Ink (Dark)**: `#0b0e1c`
- **Secondary Orange**: `#dc5608` (used sparingly)

## Font

- **Primary Font**: Inter (Google Fonts)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.)

## Setup Instructions

1. **Copy the HTML content** from each template file
2. **Log in to EmailJS** at https://www.emailjs.com/
3. **Go to Email Templates** in your dashboard
4. **Create a new template** for each form:
   - Click "Create New Template"
   - Paste the HTML content
   - Configure the template variables
   - Set the subject line:
     - Contact Form: `New Contact Request from {{from_name}}`
     - Inspection Form: `Free Inspection Request - {{property_address}}`
5. **Save the template** and copy the Template ID
6. **Add the Template IDs** to your `.env.local` file:
   ```env
   NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
   NEXT_PUBLIC_EMAILJS_INSPECTION_TEMPLATE_ID=your_inspection_template_id
   ```

## Template Features

### Contact Form Template
- Professional header with brand gradient (Oxford Blue)
- Organized information sections with clear labels
- Urgency level badges (color-coded: red for emergency, yellow for urgent, blue for normal)
- Message display box with formatted text
- Responsive design for mobile devices
- Brand footer with contact information
- Uses Inter font family matching the website

### Inspection Form Template
- Priority banner highlighting urgency (green accent color)
- Property information display with clear formatting
- Property types displayed as comma-separated list
- Action steps checklist for follow-up
- Call-to-action box with next steps
- Responsive design for mobile devices
- Brand footer with contact information
- Uses Inter font family matching the website

## Template Syntax

EmailJS uses simple variable substitution with `{{variable_name}}` syntax. The templates do NOT support Handlebars conditionals or loops. All variables are replaced with their values when the email is sent.

If a variable is empty or not provided, it will display as blank in the email. The code handles default values (e.g., "Not provided", "Not specified") before sending to EmailJS.

## Customization

You can customize these templates by:
- Modifying colors in the `<style>` section
- Adjusting spacing and padding
- Adding or removing sections
- Changing the layout structure

**Note:** Email clients have limited CSS support. Test thoroughly across different email clients (Gmail, Outlook, Apple Mail, etc.) before deploying.

## Testing

After setting up your templates in EmailJS:
1. Test the contact form on your website
2. Test the inspection form on your website
3. Verify emails are received correctly
4. Check formatting across different email clients
5. Ensure all template variables are populated correctly

## Support

For issues with EmailJS templates, refer to:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Template Guide](https://www.emailjs.com/docs/examples/reactjs/)

