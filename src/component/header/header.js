import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [regularStudents, setRegularStudents] = useState(0);
  const [remedialStudents, setRemedialStudents] = useState(0);
  const [paidClubs, setPaidClubs] = useState(0);

  const incrementRegular = () => setRegularStudents(regularStudents + 1);
  const decrementRegular = () => {
    if (regularStudents > 0) {
      setRegularStudents(regularStudents - 1);
    }
  };

  const incrementRemedial = () => setRemedialStudents(remedialStudents + 1);
  const decrementRemedial = () => {
    if (remedialStudents > 0) {
      setRemedialStudents(remedialStudents - 1);
    }
  };

  const incrementPaidClubs = () => setPaidClubs(paidClubs + 1);
  const decrementPaidClubs = () => {
    if (paidClubs > 0) {
      setPaidClubs(paidClubs - 1);
    }
  };

  return (
    <div className="header">
      <div className="stat">
        <div className="stat-box red">
          <p>{regularStudents}</p>
          <p>Regular Students</p>
          <div className="buttons">
            <button onClick={incrementRegular}>+</button>
            <button onClick={decrementRegular}>-</button>
          </div>
        </div>
        <div className="stat-box purple">
          <p>{remedialStudents}</p>
          <p>Remedial Students</p>
          <div className="buttons">
            <button onClick={incrementRemedial}>+</button>
            <button onClick={decrementRemedial}>-</button>
          </div>
        </div>
        <div className="stat-box green">
          <p>{paidClubs}</p>
          <p>In Paid Clubs</p>
          <div className="buttons">
            <button onClick={incrementPaidClubs}>+</button>
            <button onClick={decrementPaidClubs}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
