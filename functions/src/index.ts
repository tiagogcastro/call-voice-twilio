import * as functions from "firebase-functions";
import { app } from './server/app';

export const twilio_call_voice_run_app = functions.https.onRequest(app);