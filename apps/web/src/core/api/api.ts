import axios from "axios";
import { TResponse } from "common/types/TResponse";

const BASE_API_URL = `${process.env.API_SERVER}:${process.env.API_PORT}/${process.env.API_ENDPOINT}`;

// Base
const api = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});

export const fetchHello = async (): Promise<TResponse<string>> => {
  try {
    const response: Promise<TResponse<string>> = (
      await api.get(`${BASE_API_URL}/hello`)
    ).data;

    return response;
  } catch (e) {
    return {
      status: 400,
      isError: true,
      errorMessage: e instanceof Error ? e.message : "Something went wrong.",
      data: "",
    };
  }
};
