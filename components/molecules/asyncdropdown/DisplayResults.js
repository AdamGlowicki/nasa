import React from 'react';
import styled from 'styled-components';
import DropdownItem from '../../atoms/DropdownItem';
import PropTypes from 'prop-types'
import EmptyItem from '../../atoms/EmptyItem';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    position: absolute;
    transform: translateY(50px);
    z-index: 9999;
    background-color:#fff;
`;

const DisplayResults = ({nasaData, data, loading, open, handleClick}) => {

    return (
        <>
            {open ? (
                loading ? (
                    <EmptyItem/>
                ) : (
                    <Wrapper>
                        {nasaData.map((item, index) => (
                            <DropdownItem
                                key={item.data.id}
                                picture={item.data.url}
                                name={data[index]?.display_name}
                                handleClick={handleClick(item.data.id, data[index]?.place_id, data[index]?.display_name)}
                            />
                        ))}
                    </Wrapper>
                )
            ) : null}

        </>
    );
};

DisplayResults.propTypes = {
    nasaData: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
}

export default DisplayResults;