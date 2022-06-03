import axios from 'axios';
import { useState } from 'react';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestConfig {
  url: string;
  method?: Methods;
}

interface RequestBody {
  data?: any;
  params?: any;
}

axios.defaults.baseURL = 'https://testnets-api.opensea.io/api/v1/';

const useAxios = <T>(requestConfig: RequestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const sendRequest = async (body: RequestBody) => {
    setIsLoading(true);
    try {
      const method = ((requestConfig.method as Methods) || 'GET').toLowerCase();
      // eslint-disable-next-line @typescript-eslint/dot-notation
      const res = await axios[method as Lowercase<Methods>]<T>(
        requestConfig.url,
        {
          // method: requestConfig.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          data: body.data || null,
          params: body.params || null,
        },
      );
      if (res.data) {
        setError(null);
        return res.data;
      }
    } catch (err) {
      // console.log('ERR', err);
      let message = 'Unknown Error';
      if (err instanceof Error) message = err.message;
      setError(message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
    return null;
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAxios;
