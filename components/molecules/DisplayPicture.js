import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const Wrapper = styled.div`
  max-width: 50%;
  overflow: hidden;
  
  image {
    position: static;
    object-fit: contain;
  }
`;

const DisplayPicture = ({url}) => {
    return (
        <>
            {url ? (
                <Wrapper>
                    <img src={url} alt='picture'/>
                </Wrapper>
            ) : null}
        </>
    );
};

DisplayPicture.propTypes = {
    url: PropTypes.string
}

export default DisplayPicture;