import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export type APIError = {
  errors: APIErrorObject[];
};

interface APIErrorObject {
  path: string;
  messages: string[];
}
