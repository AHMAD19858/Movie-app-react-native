
import axios from 'axios'

export default {
    getMovies: async function () {
        return axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=cf8f47d37b5f4dfb5b57bcc2d75c75e0',
            timeout: 1000,
        })
    },


}
