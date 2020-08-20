import React, { Fragment } from "react";

function ProgressBar({ progress }) {
  return (
    <Fragment>
      <div className="bar">
        <div className="progress" />
      </div>
      <style jsx>{`
        .bar {
          width: 100%;
          height: 5px;
          background: var(--gray-very-ligth);
          position: fixed;
          top: var(--nav-height);
        }
        .progress {
          width: ${progress}%;
          height: 100%;
          background: var(--primary);
        }
      `}</style>
    </Fragment>
  );
}

export default ProgressBar;
