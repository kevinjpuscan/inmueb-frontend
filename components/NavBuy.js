import React from "react";

function NavBuy() {
  return (
    <div className="nav-buy">
      <div>
        <span>S/.140* m2</span>
      </div>
      <div className="content-action">
        <button className="btn btn-primary">Comprar</button>
      </div>

      <style jsx>{`
        .nav-buy {
          display: flex;
          flex-direction: row;
          height: 100%;
          align-items: center;
          justify-content: space-between;
        }

        span {
          font-weight: 900;
          color: var(--primary);
        }
      `}</style>
    </div>
  );
}

export default NavBuy;
