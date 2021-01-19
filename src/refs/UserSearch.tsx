import { useState, useRef, useEffect } from 'react';

const users = [
  {name: 'Sarah', age: 20 },
  {name: 'Mary', age: 20 },
  {name: 'Had', age: 20 },
  {name: 'A', age: 20 },
  {name: 'Lamb', age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null >(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number} | undefined >();

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const onClick = () => {
   const foundUser = users.find((user) => {
    return user.name === name;
   });

   setUser(foundUser)
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  )
};

export default UserSearch;