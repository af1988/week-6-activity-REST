import axios, { Axios, AxiosResponse } from 'axios';

export class HttpUtil {

  private _axios: Axios;

  constructor(baseURL: string) {
    this._axios = axios.create({
      baseURL: baseURL
    });
  }
  public async getRequest<T>(): Promise<T> {
    const response: AxiosResponse = await this._axios.get('');
    return response.data;
}
public async postRequest<S, T extends any>(requestBody: T): Promise<S> { 
  const response = await this._axios.post<S>('', requestBody);
  return response.data;
}

}