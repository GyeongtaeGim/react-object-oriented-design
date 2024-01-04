import type { AxiosError, AxiosResponse } from 'axios'
import {
  useQuery,
  type QueryKey,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query'

export type UseGrpcQueryOption<T = unknown> = Omit<
  Parameters<typeof useAxiosQuery<T>>[0],
  'queryKey' | 'queryFn'
>

export const useAxiosQuery = <
  TQueryFnData = AxiosResponse,
  TError = AxiosError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): UseQueryResult<TData, TError> =>
  useQuery<TQueryFnData, TError, TData, TQueryKey>(options)
