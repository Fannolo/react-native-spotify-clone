import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { AxiosRequestConfig } from 'axios';

type AxiosBaseQueryFn = BaseQueryFn<AxiosRequestConfig>;

export type { AxiosBaseQueryFn };
