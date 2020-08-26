// default import
import getSessions from './sessionRepository.js';
// named import
import {sessionTemplate, errorMessage} from './template.js';

function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
};

var data = {
    listItems: []
};

getSessions()
    .then((sessions) => {
        console.log('promises!')
        data.listItems = sessions;
        render();
    });



