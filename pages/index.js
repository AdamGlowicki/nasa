import React, {useReducer} from 'react';
import DisplayNasa from '../components/organisms/DisplayNasa';

export const NasaContext = React.createContext()

export default function Home() {

    const [data, setData] = useReducer((prev, actual) => ({...prev, ...actual}), {
        nasa: {},
        place: null
    })

    return (
        <NasaContext.Provider value={{
            data,
            setData,
        }}>
            <DisplayNasa/>
        </NasaContext.Provider>
    )
}
