import axios from 'axios';

const BASE_URL = "https://us-central1-projetbateau-d52df.cloudfunctions.net/products/"

export function getResources(resourceName) {
    const url = `${BASE_URL}/${resourceName}`;
    return axios.get(url).then((response) => {
        return response.data;
    });
}