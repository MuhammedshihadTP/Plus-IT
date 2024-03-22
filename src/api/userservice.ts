import axios from 'axios';

const BASE_URL ="https://interview-plus.onrender.com/api"; 
const token =  localStorage?.getItem('token');

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    "x-access-token":token
  },
});


export const login = async (endpoint:string, data:any) => {
    try {
      console.log(endpoint + data,"created");
      const response = await apiService.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  export const signup = async (endpoint:string, data:any) => {
    try {
      console.log(endpoint + data,"created");
      const response = await apiService.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };


  export const fetchDatas = async (endpoint:string) => {
    try {
      const response = await apiService.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  export const updateUser = async (endpoint:string,data:any) => {
    try {
      const response = await apiService.put(endpoint, data);;
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  export const deleteUser = async (endpoint:string) => {
    try {
      const response = await apiService.delete(endpoint);;
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

