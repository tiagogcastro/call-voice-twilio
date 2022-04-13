import { Router } from 'express';

import { call_voice_twilio_routes } from '../useCases/CallVoiceTwilio/routes';

export const routes = Router();

routes.use('/call', call_voice_twilio_routes);