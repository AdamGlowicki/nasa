import {handleApiError} from '../../utils';
import axios from 'axios';

const API_ADDRESS = 'https://api.nasa.gov/planetary/earth/assets?'

export default async (req, resp) => {
    const fetchData = handleApiError(async () => {
        const response = await axios.get(`${API_ADDRESS}lon=${req.query.lon}&lat=${req.query.lat}&lat&dim=0.15&api_key=sIKeOzSMvQCxnCRhTxC7IpyeCxCV8datzzwAW0Q7`)
        resp.statusCode = response.status
        resp.json(response.data)
    }, (err) => {
        console.log(err)
    })

    await fetchData()
}