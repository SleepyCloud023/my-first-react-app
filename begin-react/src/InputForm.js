import React, { useCallback, useContext, useRef } from 'react';
import { UserDispatch } from './App';
import useInput from './useInput';
import defaultUsers from './userData';

const initialInput = {
  username: '',
  email: '',
};

function InputForm() {
  const dispatch = useContext(UserDispatch);
  const uniqueID = useRef(defaultUsers.length);
  const [form, onChange, reset] = useInput(initialInput);
  const { username, email } = form;

  function onCreate() {
    dispatch({
      type: 'CREATE',
      user: {
        id: uniqueID.current++,
        active: false,
        username,
        email,
      },
    });
    reset();
  }

  return (
    <>
      <input
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default React.memo(InputForm);
