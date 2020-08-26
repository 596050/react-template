import { get, HttpRequestArgs } from './api'

export const getData = async (args: HttpRequestArgs): Promise<any> => {
  return await get(args)
}
