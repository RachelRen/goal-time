import 'whatwg-fetch';



// function formatGetParams(url, data) {
//     let paramsList = Object.keys(data);
//     paramsList = paramsList.map((item) => {
//         item += `=${data[item]}`;
//         return item;
//     });
//     return `${url}?${paramsList.join('&')}`;
// }


function formatGetParams(url:string, data:any) {
    
    return Object.keys(data).reduce((prev, currentVal, index) => {
        return index == 0 ? `${prev}${currentVal}=${data[currentVal]}` : `${prev}&${currentVal}=${data[currentVal]}`
    }, `${url}?`)
    

}
function fetchRequest(params:any):any {

    params.method = params.method || 'GET'
    
    if (/get|delete/i.test(params.method)) {
        params.data = Object.assign(params.data || {}, {
            timestamp: Date.now()
        })
        params.url = formatGetParams(params.url, params.data)
        params.data = undefined
    }
    if (/post|put/.test(params.method)) {
        params.headers = params.headers || { 'Content-Type': 'application/json' };
        params.data = JSON.stringify(params.data || {});
    }
    return fetch(params.url, {
        method: params.method,
        body: params.data,
        headers: params.headers,
        credentials: 'same-origin',
    }).then(response => response.json().then(json => ({ json, response })))
        .then(({ json, response }:{json:any, response:any}) => {
            // if (!response.ok || json.code != 200) {
            //     return Promise.reject(json);
            // }
            // return response
            // debugger;
            return json.data || {};
        })
        // .then(
        //     response => ({ response }),
        //     error => ({
        //         error: {
        //             msg: error.msg || 'Something bad happened'
        //         },
        //     }),
        // );
}


// function getRequest(url) {
//     fetch(url)
//         .then(checkStatus)
//         .then(parseJSON)
//         .then(data => data)
//         .catch((error) => {
// 	        console.log('request failed', error);
//         });
// }
export { fetchRequest };
