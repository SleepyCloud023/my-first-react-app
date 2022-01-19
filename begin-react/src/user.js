import React, { useCallback, useContext, useEffect } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
  const { id, username, email, active } = user;
  const dispatch = useContext(UserDispatch);

  const onRemove = useCallback(() => {
    dispatch({ type: 'REMOVE', id });
  }, [dispatch, id]);

  const onToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE', id });
  }, [dispatch, id]);

  useEffect(() => {
    console.log(`USER Element ${id} rendered`);
    return () => {
      console.log(`USER Element ${id} disappear`);
    };
  }, [id]);

  return (
    <div>
      <b
        style={{
          color: active ? 'orange' : 'black',
          cursor: 'pointer',
        }}
        onClick={onToggle}
      >
        User-{id}: {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={onRemove}>삭제</button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

// 두번째 인자인 propsAreEqual의 반환값이 true이면
//  UserList를 다시 계산하지 않음
export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users,
);
