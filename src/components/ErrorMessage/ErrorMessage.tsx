import React, {FC} from 'react';
import './ErrorMessage.css';

interface IErrorMessage {
    errorMessage: string
}

const ErrorMessage:FC<IErrorMessage> = ({errorMessage}) => {
  return (
      <div className="error-message" id="error-message">
          <p>{errorMessage}</p>
      </div>
  );
};

export default ErrorMessage;
