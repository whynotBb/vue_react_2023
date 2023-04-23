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

const StyledCrudListItem = styled.tr`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

function CrudListItem({
  item,
  callbackDel,
  callbackUp,
  callbackDown,
  callbackSave,
}) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [isEditMode, setIsEditMode] = useState(false); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  // ref 만들기.
  // const refInput = useRef();
  const refInputName = useRef();
  const refInputPower = useRef();

  // 이벤트 핸들러 작성.
  const handlerDel = (e) => {
    console.log(e.target);
    // 부모의 콜백메서드 호출
    callbackDel(item);
  };
  const handlerUp = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    callbackUp(item);
  };
  const handlerDown = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    callbackDown(item);
  };
  const handlerSave = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    const name = refInputName.current.value; //input의 값 가져오기
    let power = refInputPower.current.value;
    // !name => null , undifined, '
    //name = '   ' => trim 공백제거
    if (!name || name.trim() === '') {
      alert('name 입력하세요');
      refInputName.current.focus();
      e.stopPropagation();
      e.preventDefault();
      return false; // 이름입력 없을때 아래 함수 실행 되지 않도록 함수 종료
    }
    if (!power || power.trim() === '' || isNaN(power)) {
      alert('power 입력하세요');
      refInputPower.current.focus();
      e.stopPropagation();
      e.preventDefault();
    }
    power = Number(power);
    // 부모에게 전달 할 데이터 객체로 만들기
    const newitem = { id: item.id, name: name, power: power };
    debugger;
    callbackSave(newitem);
    setIsEditMode(!isEditMode);
  };
  const handlerEdit = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    setIsEditMode(!isEditMode);
    console.log(isEditMode);
  };

  let strong = '';
  item.power >= 300 ? (strong = 'strong') : (strong = null);

  const formView = (
    <StyledCrudListItem className={strong}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.power}</td>

      <td>
        <button type="button" onClick={handlerDel}>
          Del
        </button>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerEdit}>
          Edit
        </button>
      </td>
    </StyledCrudListItem>
  );
  const formEdit = (
    <StyledCrudListItem className={strong}>
      <td>{item.id}</td>
      <td>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          ref={refInputName} //값 받아오기
          defaultValue={item.name} // 값이 없을때 기본 값 설정
        />
      </td>
      <td>
        <input
          type="number"
          name="power"
          placeholder="숫자를 입력하세요"
          ref={refInputPower}
          defaultValue={item.power}
        />
      </td>

      <td>
        <button type="button" onClick={handlerDel}>
          Del
        </button>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerSave}>
          save
        </button>
      </td>
    </StyledCrudListItem>
  );
  if (isEditMode) return formEdit;
  else return formView;
}

CrudListItem.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.object.isRequired,
  callbackDel: PropTypes.func.isRequired,
  callbackUp: PropTypes.func.isRequired,
  callbackDown: PropTypes.func.isRequired,
  callbackSave: PropTypes.func.isRequired,
};
CrudListItem.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  item: {},
  callbackDel: () => {},
  callbackUp: () => {},
  callbackDown: () => {},
  callbackSave: () => {},
};

export default CrudListItem; // React.memo(CrudListItem); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
