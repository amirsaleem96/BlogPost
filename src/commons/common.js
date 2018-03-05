import axios from 'axios';

var asyncQuery = () => {
    return new Promise((resolve, reject) => {
        axios.get('/test/api').then(resolve).catch(reject);        
    });
}

async().then((data) => {
    console.log(data);
})