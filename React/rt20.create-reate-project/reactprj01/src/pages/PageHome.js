import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useParams,
  useLocation,
  useHistory,
  useNavigate,
} from 'react-router-dom';
import CrudContainer from '../containers/crud/CrudContainer';
import CompStyle from '../containers/styled/CompStyle';
import HomeContainer from '../containers/home/HomeContainer';
import TodoContainer from '../containers/todo/TodoContainer';

const StyledPageHome = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  ul.menu > li {
    display: inline-block;
    padding: 0 20px;
    margin: 10px 0 50px 0;
  }
  .active {
    background-color: aqua;
  }
  .inactive {
    background-color: none;
  }
`;

function PageHome({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledPageHome>
      <div>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/crud">Crud</NavLink>
          </li>
          <li>
            <NavLink to="/style">style</NavLink>
          </li>
          <li>
            <NavLink to="/todo">todo</NavLink>
          </li>
          <li>
            <NavLink to=""></NavLink>
          </li>
          <li>
            <NavLink to=""></NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/style" element={<CompStyle />} />
        <Route path="/crud" element={<CrudContainer />} />
        <Route path="/todo" element={<TodoContainer />} />
        <Route path="/" element={<HomeContainer />} />
        <Route path="*" to="/" />
        {/* 리다이렉트 */}
      </Routes>
    </StyledPageHome>
  );
}

PageHome.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
PageHome.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default PageHome; // React.memo(PageHome); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
