import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  background: none;
  padding: .25rem;
  
  div.content {
    padding: .25rem;
    background-color: whitesmoke;
    display: flex;
    min-width: 300px;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    border-radius: .25rem;
    cursor: pointer;
    transition: 200ms;
  }
  
  div.content:hover {
    background-color: lightgrey;
  }
  
  div.name {
    font-size: 1rem;
    font-weight: 700;
    margin-right: 1rem;
  }
  
  img {
   width: 100px;
   height: 100px;
   object-fit: cover;
  }
`;

const DropdownItem = ({name, picture, handleClick}) => {
    return (
        <Wrapper onClick={handleClick}>
            <div className="content">
                <div className='name'>{name}</div>
                <img src={picture} alt='obrazek'/>
            </div>
        </Wrapper>
    );
};

export default DropdownItem;