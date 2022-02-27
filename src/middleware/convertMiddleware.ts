import { NextFunction, Request, Response } from 'express';
import { convertToCamel } from '../helper/helpers';

export const convertMiddleware = async (requests: Request, res: Response, next: NextFunction) => {
  const { query, body } = requests;
  convertToCamel(query);
  convertToCamel(body);
  return next();
};
