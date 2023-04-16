import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCompStyle = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .App {
    display: inline-block;
    background-color: gray;
    border: 10px solid black;
    height: 63px;
    width: 300px;
  }
`;
const StyledCircle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || 'black'};
  border-radius: 50%;
  margin: auto;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function CompStyle({ ...props }) {
  return (
    <StyledCompStyle>
      <h2>styled-components 로 만든</h2>
      <div className="App">styled-components 스타일로 만든</div>
      <hr />
      <StyledCircle color={'blue'}></StyledCircle>
      <hr />
      <StyledCircle></StyledCircle>
      <hr />
      <StyledCircle color={'aqua'} huge={true}></StyledCircle>
      <hr />
      <StyledCircle color={'red'} huge={false}></StyledCircle>
    </StyledCompStyle>
  );
}

export default CompStyle; // React.memo(CompStyle); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
