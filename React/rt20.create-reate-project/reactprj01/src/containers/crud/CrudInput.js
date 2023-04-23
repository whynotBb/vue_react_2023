import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCrudInput = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

function CrudInput({ callbackAdd }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [변수명, set변수명] = useState('기본값'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  // ref 만들기.
  const refInputName = useRef();
  const refInputPower = useRef();

  // 이벤트 핸들러 작성.
  const handlerAdd = (e) => {
    console.log(e.target);
    //input 입력 유효성 검사
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
    const newitem = { name: name, power: power };
    debugger;
    callbackAdd(newitem);
    refInputName.current.value = null;
    refInputPower.current.value = null;
  };

  return (
    <StyledCrudInput>
      <div>
        <label htmlFor="">Name : </label>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          ref={refInputName} //값 받아오기
          defaultValue={''} // 값이 없을때 기본 값 설정
        />
      </div>
      <div>
        <label htmlFor="">Power : </label>
        <input
          type="number"
          name="power"
          placeholder="숫자를 입력하세요"
          ref={refInputPower}
          defaultValue={0}
        />
      </div>
      <button type="button" onClick={handlerAdd}>
        Add
      </button>
    </StyledCrudInput>
  );
}

CrudInput.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackAdd: PropTypes.func.isRequired,
};
CrudInput.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackAdd: () => {},
};

export default CrudInput; // React.memo(CrudInput); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
