import { Router } from 'express';

import { controller_instance } from './controller';

export const call_voice_twilio_routes = Router();

call_voice_twilio_routes.post('/voice/twilio', controller_instance.handler);