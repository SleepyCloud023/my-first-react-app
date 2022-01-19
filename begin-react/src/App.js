import React, { createContext, useMemo, useReducer} from 'react';
import InputForm from './InputForm';
import UserList from './user';
import defaultUsers from './userData';

const containerCss = {
  height: '100vh',
  padding: '20px'
}

function countActivateUsers(users) {
  console.log('활성 사용자 수 계산 중...');
  const activatedUsers = users.filter(user => user.active);
  return activatedUsers.length;
}

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      const nextUser = action.user;
      return {
        ...state,
        users: [...state.users, nextUser],
      };
    
    case 'REMOVE':
      return {
        input: state.input,
        users: state.users.filter((user) => user.id !== action.id),
      };
    
    case 'TOGGLE':
      return {
        ...state,
        users: state.users.map( (user) =>
          user.id === action.id ? {...user, active: !user.active} : user
        ),
      };
      
    default:
      throw new Error('undefined action type!');
  }
}


const initialUsers = {
  users: defaultUsers,
};

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialUsers);
  const {users} = state;
  const count = useMemo(() => countActivateUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <div style={containerCss}>
        <InputForm/>
        <UserList
          users={users}
          />
        <div>활성 사용자 수: {count}</div>
      </div>
    </UserDispatch.Provider>
  );
}

export default App;