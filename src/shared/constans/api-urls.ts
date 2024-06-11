import * as dotenv from 'dotenv';

dotenv.config();
//const baseUrl = 'http://localhost:3000/api/v1';
const baseUrl = import.meta.env.API_BASE_URL;

export const API_URLS = {
  LOGIN_USER: `${baseUrl}/users/login`,
  LOGIN_ATENDEE: `${baseUrl}/atendees/login`,
  USER_PROFILE: `${baseUrl}/users/profile`,
  SIGNUP_ATENDEE: `${baseUrl}/atendees/register`,
  EVENTS: `${baseUrl}/events`,
  EVENTS_TYPES: `${baseUrl}/events-types`,
  EVALUATIONS: `${baseUrl}/evaluations`,
};
