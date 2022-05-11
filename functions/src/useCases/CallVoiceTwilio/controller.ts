import { Request, Response } from 'express';
import { twilio_client } from '../../config/twilio';

type Data = {
  to: string;
  from?: string;
  twiml?: string;
}

export class Controller {
  async  handler(request: Request, response: Response) {
    let { from, to, twiml }: Data = request.body;

    let env_optional_phone_number = process.env.TWILIO_PHONE_NUMBER_OPTIONAL;

    if(!to) {
      return response.json({
        status: 'error',
        statusCode: 403,
        message: 'Number to is requires',
        data: null,
      });
    }

    if(env_optional_phone_number) {
      from = env_optional_phone_number;
    } else {
      if(!from) {
        return response.json({
          status: 'error',
          statusCode: 403,
          message: 'REQUIRED: Insert the number from in the request or in the environment variable',
          data: null,
        });
      }
    }

    try {
      const call_response = await twilio_client.calls.create({
        twiml,
        to,
        from
      });
  
      return response.json({
        status: 'success',
        statusCode: 201,
        message: 'Call voice was successful',
        error: null,
        data: call_response,
      });

    } catch (error: any) {
      return response.json({
        status: 'error',
        statusCode: 403,
        message: error.message,
        error,
        data: null,
      });
    }
  }
}

export const controller_instance = new Controller();