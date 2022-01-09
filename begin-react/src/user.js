import React from "react";

export function InputForm({username, email, onChange, onCreate}) {
  return(
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
  )
}

export function User({user, onRemove, onToggle}) {
  const {id, username, email, active} = user;
  console.log(`USER Element ${id} rendered`);
  return(
    <div>
      <b 
        style={{
          color: active ? 'orange' : 'black',
          cursor: 'pointer'
        }}
        onClick={()=>onToggle(id)}
      >
        User-{id}: {username}
      </b>
      &nbsp;
      <span>({email})</span>
      <button onClick={()=>onRemove(id)}>삭제</button>
    </div>
  )
}

export function UserList({users, onRemove, onToggle}) {
  return(
    <div>
      {users.map((user)=> <User 
                            key= {user.id} 
                            user={user} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                            />)}
    </div>
  );
}
