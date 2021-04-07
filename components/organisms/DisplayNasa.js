import React, {useContext} from 'react';
import styled from 'styled-components';
import AsyncDropdown from '../molecules/asyncdropdown/AsyncDropdown';
import DisplayPicture from '../molecules/DisplayPicture';
import {NasaContext} from '../../pages';
import Map from '../molecules/map/Map';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h1 {
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
  
  div.search {
    margin-left: 4rem;
  }
  
  label {
    margin-bottom: 10rem;
  }
  
  div.pictureMap {
    display: flex;
    padding: 0 1rem;
    flex-grow: 1;
    height: 300px;
  }
  
  div.map {
    width: 100%;
  }
`;

const DisplayNasa = () => {
    const {data} = useContext(NasaContext);
    return (
        <Wrapper>
            <h1>nasa places</h1>
            <div className='search'>
                <label>Search place:</label>
                <AsyncDropdown/>
            </div>
            <div className='pictureMap'>
                <DisplayPicture url={data?.nasa?.data?.url}/>
                <div className='map'>
                    <Map/>
                </div>
            </div>
        </Wrapper>
    );
};

export default DisplayNasa;