import React, {useCallback, useContext, useState} from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
import styled from 'styled-components';
import {handleApiError} from '../../../utils';
import DisplayResults from './DisplayResults';
import {NasaContext} from '../../../pages';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  input {
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 1rem;
    padding: .5rem;
  }
`

const AsyncDropdown = () => {
    const [value, setValue] = useState('');
    const [openSearch, setOpenSearch] = useState('')
    const [data, setData] = useState([])
    const [nasaData, setNasaData] = useState([])
    const [loading, setLoading] = useState(false)

    const {setData: setContextData} = useContext(NasaContext)

    const makePromiseList = (array) => (
        array.map(({lon, lat}) => (
            axios.get(`api/nasa?lon=${lon}&lat=${lat}`)
        ))
    )

    const fetchData = handleApiError(async (value) => {
        setLoading(true)
        const response = await axios.get(`api/nominatim?param=${value}`)
        const responseNasa = await Promise.all([...makePromiseList(response.data)])

        setData(response.data)
        setNasaData(responseNasa)
        setLoading(false)
    }, (err) => {
        setLoading(false)
        console.log(err)
    })

    const handleClick = (id, placeId, name) => () => {
        setValue(name)
        setOpenSearch('')
        const clickedNasaData = nasaData.find(item => item.data.id === id)
        const clickedPlace = data.find(item => item.place_id === placeId)

        setContextData({
            nasa: clickedNasaData,
            place: clickedPlace,
        })
    }


    const debouncedFetch = useCallback(
        debounce((value) => {
                console.log(value)
                fetchData(value)
            }
            , 1000),
        []
    );

    const handleChange = ({target: {value}}) => {
        setValue(value)
        setOpenSearch(value)
        debouncedFetch(value)
    }

    return (
        <Wrapper>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder='enter country'
            />
            <DisplayResults
                nasaData={nasaData}
                data={data}
                open={!!openSearch}
                loading={loading}
                handleClick={handleClick}/>
        </Wrapper>
    );
};

export default AsyncDropdown;

