import { useState } from 'react';

const Password = () => {
  const [password, setPassword] = useState('');

  const getPassword = (event) => {
    setPassword(event.target.value);
  };

  const calculatePassword = (password) => {

    let result = '';

    if(password.length >= 6){
        result = 'Hard';
    }else{
        result = 'easy';
    }

    return result

  };

  const passwordLevel = calculatePassword(password);

  return (
    <div >
        <div>
            <h2>Password level</h2>
            <input
                type="password"
                value={password}
                onChange={getPassword}
            />
           <h1>{passwordLevel}</h1>
        </div>
        <hr />
    </div>
  );
};

export default Password;