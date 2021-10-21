import React from "react";
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span>
          something has gone terrible wrong
      </span>
      <span>
          (but we already sebt droids to fix it)
      </span>
    </div>
  )
}

export default ErrorIndicator;