import axios from 'axios';


export default axios.create({
baseURL:'https://api.unsplash.com',
headers:{
    Authorization: 'Client-ID 9ZHclwnOGKASijtsrcvDUiH17Bmhie1N6Il_LlmX-Ng'
}
});