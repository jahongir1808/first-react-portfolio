import { request } from "../server/request";

export const sendData = (url, data) => {
  return request.post(url, data);
};
