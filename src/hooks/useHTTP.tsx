
import { Teacher } from '../interfaces/Teacher';

interface IOptions {
  body?: string;
  headers: Record<string, string>;
}

const useHTTP = async (
  requestMethod: string = "GET",
  url: string,
  options: IOptions = {
    body: undefined,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }
) => {

  const response: Promise<{ teachers: Teacher[] }> = await fetch(url, {
    method: requestMethod,
    body: options.body,
    headers: options.headers
  }).then(res => res.json());

  return { response };
}

export default useHTTP