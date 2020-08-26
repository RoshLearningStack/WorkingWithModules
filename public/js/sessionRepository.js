
const sessionURL = 'sessions.json';
let sessionList = [];

// default export
// export default 
function getSessions() {
    return new Promise(function (resolve, reject) {
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionURL, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

// named export
// export {getSessions as sessions};

 export {// default export 
    getSessions as default, 
    // named export
    sessionURL};

// aggregating modules
// export {sessionTemplate} from './template.js';