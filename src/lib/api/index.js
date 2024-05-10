import axios from "axios";

axios.defaults.baseURL = "https://xeniamailsender.onrender.com/";

export const emailService = async (data) => {
  const emailServiceURL = "send-email";
  try {
    const response = await axios.post(emailServiceURL, data);
    return response;
  } catch (error) {
    return error;
  }
};
