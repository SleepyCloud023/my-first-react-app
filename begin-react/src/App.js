import React, { useRef, useState } from 'react';
import {InputForm, UserList} from './user';

// import logo from './logo.svg';
// import './App.css';

const userList = [
  {
    id: 0,
    username: '꽃게',
    email: 'eun51@gmail.com',
    active: true,
  },
  {
    id: 1,
    username: '김태형',
    email: 'gnflwhf352@gmail.com',
    active: false,
  },
  {
    id: 2,
    username: '죠르디',
    email: 'jor0019@gmail.com',
    active: false,
  }
];


const containerCss = {
  height: '100vh',
  padding: '20px'
}

function App() {
  const [input, setInput] = useState({
    username: '',
    email: '',
  });
  const {username, email} = input;
  const [users, setUser] = useState(userList);
  const uniqueID = useRef(userList.length);

  function onCreate(e) {
    console.log(users);
    console.log('등록버튼 클릭!');
    setUser([
      ...users,
      {
        ...input,
        id: uniqueID.current++,
        active: false,
      }
    ])
    setInput({
      username: '',
      email: '',
    })
    // 왜 추가된 상태로 출력되지 않을까?
    setTimeout(()=>console.log(users), 1000);
  }
  
  const onChange = e => {
    const {name, value} = e.target;
    setInput({
      ...input,
      [name]: value,
    })
  }

  const onRemove = (id) => {
    console.log(`selected ID: ${id}`);
    setUser(users.filter( (user) => user.id !== id));
  }

  const onToggle = (id) => {
    setUser(users.map( (user) => {
      const toggledUser = {...user, active: !user.active};
      return user.id === id ? toggledUser : user;
    }));
  }

  return (
    <div style={containerCss}>
      <InputForm
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </div>
  );
}

export default App;


