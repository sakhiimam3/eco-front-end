"use Client"

const axios = require('axios');

export const postRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error in POST request:', error);
    throw error;
  }
};


export const  getRequest = async (url) => {
  
    try {
      const response = await axios.get(url);
      return  response.data;
    } catch (error) {
      console.error('Error in GET request:', error);
      throw error;
    }
  };


  export const updateRequest = async (url, data) => {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      console.error('Error in PUT request:', error);
      throw error;
    }
  };


  export const deleteRequest = async (url) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.error('Error in DELETE request:', error);
      throw error;
    }
  };


  
