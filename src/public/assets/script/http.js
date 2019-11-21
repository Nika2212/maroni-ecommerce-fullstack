class HTTP {
    static get(_url, queryParams, headers = null, onProgressCallback = null) {
        return new Promise((success, fail) => {
            let url = _url;
            if (queryParams !== null && typeof queryParams === 'object') {
                url += '?';
                for (const param in queryParams) {
                    if (queryParams.hasOwnProperty(param)) {
                        url += param + '=';
                        url += queryParams[param];
                        url += '&';
                    }
                }
                url = url.slice(0, -1);
            }
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            if (headers !== null && typeof headers === 'object') {
                for (const header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        request.setRequestHeader(header, headers);
                    }
                }
            }
            if (onProgressCallback !== null && typeof onProgressCallback === 'function') {
                request.onprogress = (event) => onProgressCallback;
            }
            request.onload = () => {
                let payload;
                try {
                    payload = JSON.parse(request.responseText);
                } catch (e) {
                    payload = request.response;
                }
                if (request.status >= 200 && request.status <= 226) {
                    success(payload);
                } else {
                    fail(payload);
                }
            };
            request.send();
        });
    }
    static post(url, body, headers = null) {
        return new Promise((success, fail) => {
            const request = new XMLHttpRequest();
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/json');
            if (headers !== null && typeof headers === 'object') {
                for (const header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        request.setRequestHeader(header, headers);
                    }
                }
            }
            request.onload = () => {
                let payload;
                try {
                    payload = JSON.parse(request.response);
                } catch (e) {
                    payload = request.response;
                }
                if (request.status >= 200 && request.status <= 226) {
                    success(payload);
                } else {
                    fail(payload);
                }
            };
            request.send(JSON.stringify(body));
        });
    }
    static put(url, body) {}
    static patch(url, body) {}
    static delete(url, body) {}

    static imitateRequest(timeout = 3000, errorMode = false, progressSteps = 6, onProgressCallback = null) {
        return new Promise((success, fail) => {
            if (errorMode) {
                setTimeout(() => {
                    fail('ERROR');
                }, timeout);
            } else {
                let step = 0;
                let interval;
                setTimeout(() => {
                    clearInterval(interval);
                    success();
                }, timeout);
                if (onProgressCallback !== null && typeof onProgressCallback === 'function') {
                    interval = setInterval(() => {
                        if (step < progressSteps) {
                            step++;
                            onProgressCallback((step / progressSteps));
                        } else {
                            clearInterval(interval);
                        }
                    }, Math.floor(timeout / progressSteps));
                }
            }
        });
    }
}
