export interface ApiResult<T = unknown> {
  code: number;
  data: T;
  msgs?: string[];
}

export interface ApiPageResult<T = unknown> {
  code: number;
  data: {
    list: T[];
    total: number;
  };
  msgs?: string[];
}

export interface Status {
  /**值 */
  name: string;
  /**文字 */
  text: string;
}

export interface PageQueryParams {
  data?: any;
  page: {
    num: number;
    size: number;
    order?: string;
    property?: string;
  };
}

export interface Location {
  id: number;
  province: string;
  city: string;
  district: string;
  location: string;
}

export interface User {
  id: number;
  userName: string;
}
