import axios from 'axios';

// export default class BeersService {
    
//     static async beers_api(accessToken, limit = 9, page = 1 ) {
//         const response = await axios.get(
//             `https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`,{
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`
//                 }
//             }
//         );
//         return response;
//     }

//     static async filter_api(accessToken, dateStrBefore = '', dateStrAfter = '') {

//         const url = dateStrBefore 
//             ? `https://api.punkapi.com/v2/beers?brewed_before=${dateStrBefore}` 
//             : `https://api.punkapi.com/v2/beers?brewed_after=${dateStrAfter}`;

//             const response = await axios.get(url, {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`
//                 }
//             }
//         );
//         return response;
//     }
// }

export const beers_api = async (accessToken, limit = 9, page = 1 ) => {
    return await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${limit}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        const { response: { data: { message } } } = error;
        throw new Error(message)
    });
}

export const filter_api = async(accessToken, dateStrBefore = '', dateStrAfter = '') => {

    const url = dateStrBefore 
        ? `https://api.punkapi.com/v2/beers?brewed_before=${dateStrBefore}` 
        : `https://api.punkapi.com/v2/beers?brewed_after=${dateStrAfter}`;

    return await axios.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        const { response: { data: { message } } } = error;
        throw new Error(message)
    });
}

export const singleBeer_api = async(accessToken, id) => {
    return await axios.get(`https://api.punkapi.com/v2/beers/${id}`,  {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        const { response: { data: { message } } } = error;
        throw new Error(message)
    });
}

export const similarBeers_api = async(accessToken, ibu_gt, abv_gt) => {
    return await axios.get(`https://api.punkapi.com/v2/beers?ibu_gt=${ibu_gt}&abv_gt=${abv_gt}&per_page=9`,  {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        const { response: { data: { message } } } = error;
        throw new Error(message)
    });
}
