import Axios, { AxiosRequestConfig, CustomParamsSerializer } from "axios";
import { stringify } from "qs";

const env = process.env.NODE_ENV;
console.log(555, env);

const token = "111";
// 默认配置
const defaultConfig: AxiosRequestConfig = {
  // baseURL: 'https://msp-test.itqm.cn/msp-api', // 设置基础URL
  baseURL: env !== "development" ? "https://msp-test.itqm.cn/msp-api" : "/api",
  timeout: 10000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  paramsSerializer: {
    serialize: stringify as unknown as CustomParamsSerializer,
  },
};

class MspHttp {
  // 创建 Axios 实例
  private static axiosInstance = Axios.create(defaultConfig);

  constructor() {
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
  }

  // 请求拦截器，用于添加请求头等操作
  private httpInterceptorsRequest(): void {
    MspHttp.axiosInstance.interceptors.request.use(
      (config) => {
        // 添加请求头
        config.headers.Authorization = `Bearer ${token}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // 响应拦截器，用于处理响应数据和错误
  private httpInterceptorsResponse(): void {
    MspHttp.axiosInstance.interceptors.response.use(
      (response) => {
        // 处理响应数据，可以在这里进行数据转换等操作
        const { data } = response;

        return data;
      },
      (error) => {
        // 处理错误
        return Promise.reject(error);
      }
    );
  }

  // 发送 GET 请求
  public get(url: string, params?: any): Promise<any> {
    return MspHttp.axiosInstance.get(url, { params });
  }

  // 发送 POST 请求
  public post(url: string, data?: any): Promise<any> {
    return MspHttp.axiosInstance.post(url, data);
  }
}

export const http = new MspHttp();
