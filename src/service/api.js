const host = 'https://parseapi.back4app.com';
const appId = 'WSZLGjYI2skvfJRM5LNgilswzx0uJaE59wgo01R1';
const apiKey = 'DTt5dWFPmHt4PIAmkaHzVJwVQxiTm1L1mxAAmrvF';

async function request(method, url, data) {
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };


    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        let result;
        if (response.status != 204) {
            result = await response.json();
        }

        if (response.ok == false) {
            const error = result;
            throw error;
        }

        return result;
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export {
    get,
    post,
    put,
    del
};