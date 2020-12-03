import axios from "axios";


class HttpService {

    static Instance() {

        let ax = new axios.create({
            baseURL: '/',
            timeout: 600000,
            headers:  {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        ax.interceptors.request.use(config => {
            return config
        });

        return ax;
    }
}

//https://gist.github.com/alfonmga/96474f6adb6ed8dee8bc8bf8627c0ae1
export default HttpService.Instance()