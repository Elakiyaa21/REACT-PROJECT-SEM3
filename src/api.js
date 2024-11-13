import axios from 'axios';

const API_BASE_URL = 'https://example.com/api'; // Replace with your actual API endpoint

export const fetchServices = async () => {
  const response = await axios.get(`${API_BASE_URL}/services`);
  return response.data;
};

export const fetchTestimonials = async () => {
  const response = await axios.get(`${API_BASE_URL}/testimonials`);
  return response.data;
};
