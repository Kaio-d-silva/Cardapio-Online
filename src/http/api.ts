import axios , {
    AxiosInstance,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios';

// instacia do axios
const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
     'Content-Type': 'application/json'
    }
})


api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers.set('Authorization', `Bearer ${token}`)
        }
        return config
    } 
)

api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Se tem sucesso na requisição, retorno o valor para manter a tipagem
        return response
    },
    async (error) => {

        const {status} = error.response

        if (status >= 400) {
        console.log(error)
        return Promise.reject(
          new Error(
            JSON.stringify({
              status,
              message: error.response.data?.message || 'Erro desconhecido.',
            }),
          ),
        );
      }
    }
)

export default api