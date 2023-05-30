import { useState } from "react";

const ToDo = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        <h2>ToDo</h2>
          <button onClick={changeState}>See To Do</button>
          {isOpen && (
            <ul>
              {options.map((option) => (
                <li key={option} >
                  {option}
                </li>
              ))}
            </ul>
          )}
      </div>
      <hr />
    </div>
  );
};

export default ToDo;