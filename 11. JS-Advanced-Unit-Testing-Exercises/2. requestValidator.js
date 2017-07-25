function validateRequest(request) {
    if(!request.method || !/^(GET|POST|DELETE|CONNECT)$/g.test(request.method)){
        throw new Error('Invalid request header: Invalid Method')
    }

    if(!request.uri || !/^[A-Za-z\d.*]+$/g.test(request.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!request.version ||
        !/^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/g.test(request.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!request.message || !/^[^<>\\&'"]*$/g.test(request.message)){
        if(request.message === ''){
           return request;
        }

        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}

validateRequest({
    method: 'GET ',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
