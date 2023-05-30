import { useState } from "react";

const Grade = ({ grades }) => {
  const [grade, setGrade] = useState(0);

  const calculate = () => {
    let sum = 0;

    for (let i = 0; i < grades.length; i += 1) {
      sum += grades[i];
    }

    const finalGrade = sum / grades.length;

    setGrade(finalGrade);
  };

  return (
    <div>
      <div>
        <button onClick={calculate}>Know your final grade</button>
        <h1>Hello, your final grade is: {grade}</h1>
      </div>
      <hr />
    </div>
  );
};

export default Grade;
