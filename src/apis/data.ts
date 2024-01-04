/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import client from './client';

export default class DataClient {
  private static url: string;

  static find<T extends DataClient>(this: { new (data: T): T } & typeof DataClient) {
    return client.get<T[]>(`${this.url}`);
  }

  static findById<T extends DataClient>(id: number) {
    return client.get<T>(`${this.url}/${id}`);
  }

  static create<T extends DataClient>(body: T) {
    return client.post<T>(`${this.url}`, body);
  }

  static update<T extends DataClient>(id: number, body: T) {
    return client.patch<T>(`${this.url}/${id}`, body);
  }

  static delete<T extends DataClient>(id: number) {
    return client.delete<T>(`${this.url}/${id}`);
  }
}

export function DataDecorator(url: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      protected static url = url;
    };
  };
}
