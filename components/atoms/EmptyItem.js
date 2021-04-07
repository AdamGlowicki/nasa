import React from 'react';
import styled, {keyframes} from 'styled-components';

const blink = keyframes`
  0%, 40% {opacity: 1;}
  40%, 60% {opacity: 0.7;}
  60%, 100% {opacity: 1;}
`

const Wrapper = styled.button`
  border: none;
  background: lightgrey;
  margin-bottom: 1rem;
  padding: .5rem;
  border-radius: .5rem;
  animation: ${blink} 1s linear infinite;
  position:absolute;
  transform: translateY(50px);
  z-index: 9999;
  
  div.content {
    display: flex;
    min-width: 300px;
    align-items: center;
    justify-content: space-between;
    border-radius: .5rem;
    padding: .5rem;
    background-color: #fff;
  }
  
  div.name {
    height: 1rem;
    flex-grow: 1;
    margin-right: 1rem;
    border-radius: .25rem;
    background-color: lightgrey;
  }
  
  div.picture {
   width: 100px;
   height: 100px;
   border-radius: .5rem;
   background-color: lightgrey;
  }
`;

const EmptyItem = () => {
    return (
        <Wrapper >
            <div className='content'>
                <div className='name'/>
                <div className='picture'/>
            </div>
        </Wrapper>
    );
};

export default EmptyItem;