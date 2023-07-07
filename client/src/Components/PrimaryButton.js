import React from 'react'
import Button from './Button';

const PrimaryButton = ({handleNext, selectionCount, source}) => {
  return (
    <div className="w-2/3" onClick={handleNext}>
      {selectionCount < 3 ? (
        <Button text="Next" />
      ) : source === "usersignup" ? (
        <Button text="Create Account" />
      ) : (
        <Button text="Login" />
      )}
    </div>
  );
}

export default PrimaryButton