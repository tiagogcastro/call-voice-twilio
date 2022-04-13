import twilio = require('twilio');

const twilio_account_sid = process.env.TWILIO_ACCOUNT_SID;
const twilio_auth_token = process.env.TWILIO_AUTH_TOKEN;

const twilio_client = twilio(twilio_account_sid, twilio_auth_token);

export {
  twilio_account_sid,
  twilio_auth_token,
  twilio_client
}