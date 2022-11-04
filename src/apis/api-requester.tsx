import axios, { AxiosError, AxiosResponse } from "axios";
import React from "react";
import { BASE_URL, KEY } from "./config";
import { Delivery } from "../types/types";
import { CustomToast } from "../components/modals-toasts/Toast";

export const ApiRequester = () => {
  const { errorToast, successToast } = CustomToast();

  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios.interceptors.request.use(
    function (request) {
      //console.log('Starting Request', JSON.stringify(request, null, 2))
      return request;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      //console.log('Response:', JSON.stringify(response, null, 2))
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const saveDelivery = async (delivery: Delivery) => {
    const dt = { ...delivery, key: KEY };
    try {
      const resp = axios.post("delivery", dt);
    } catch (error: unknown) {
      console.log(error);
      errorToast({
        title: "Erro ao cadastrar uma encomenda",
        message: `Por favor aguarde alguns segundos e tente novamente.`,
      });
    }
    console.log(dt);
  };
  const getDataBar = async () => {
    try {
      const data = await axios.get("dataBar");
      const resp = data.data;
      return resp;
    } catch (error: unknown) {
      console.log(error);
    }
  };
  const getAreaBar = async () => {
    try {
      const data = await axios.get("dataArea");
      const resp = data.data;
      return resp;
    } catch (error: unknown) {
      console.log(error);
    }
  };
  const getTableData = async () => {
    try {
      const data: AxiosResponse = await axios.get("delivery/all");
      const resp = data.data;
      return resp;
    } catch (error: unknown | AxiosError) {
      console.log(error);
    }
  };

  return { getDataBar, getTableData, saveDelivery, getAreaBar };
};
