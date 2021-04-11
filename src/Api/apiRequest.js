import Endpoints from './apiEndpoints'
import axios from 'axios'

class ApiRequest{

    constructor(){}

    
    async  makeRequest(endPointkey,params)
    {
        let endpoint=Endpoints[endPointkey]
        let request=this.createRequest(endpoint,params);
        let response=await axios(request)
        return response.data
    }


    createRequest(endpoint,params){
        let url=`${endpoint.baseUrl}${endpoint.url}`
        url=params ? this.addRouteParams(url,params) : url
        let request={
            url:url,
            method:endpoint.method,
        }

        return request
    }

    addRouteParams(url, params) {
		let keys = url.match(/!\w+/gi);
		if (keys) {
			keys.forEach(key => {
				let keyName = key.replace('!', '');
				url = url.replace(key, params[keyName]);
			})
		}
		return url;
	}



}



export const apirequest=new ApiRequest();