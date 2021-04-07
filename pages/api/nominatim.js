import {handleApiError} from '../../utils';
import axios from 'axios';

const API_ADDRESS = 'https://nominatim.openstreetmap.org/?q='

export default async (req, resp) => {
    const fetchData = handleApiError(async () => {
        const response = await axios.get(`${API_ADDRESS}${req.query.param}&format=json&limit=4`)
        resp.statusCode = response.status
        resp.json(response.data)
    }, (err) => {
        console.log(err)
    })

    await fetchData()
}
