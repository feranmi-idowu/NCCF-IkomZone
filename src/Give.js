import React from "react";

function Give() {
  return (
    <section id="give" className="give-section">
      <div className="give-container">
        <div className="give-grid">
          {/* Left Side: Info */}
          <div>
            <p className="kicker">Partner</p>
            <h2 className="give-title">Give to the Work</h2>
            <p className="give-subtitle">
              Your generosity fuels missions, discipleship and community impact.
            </p>

            <div className="bank-grid">
              <div className="card bank-card">
                <div className="font-semibold">Bank Transfer</div>
                <div className="muted-text">Acct Name: NCCF IKOM ZONE</div>
                <div className="muted-text">Bank: Placeholder Bank</div>
                <div className="muted-text">Acct No: 0123456789</div>
              </div>
              <div className="card bank-card">
                <div className="font-semibold">Other Channels</div>
                <div className="muted-text">USSD | Cash | Pledges</div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="card form-card">
            <h3 className="form-title">Give Online</h3>
            <form className="form">
              <input type="text" placeholder="Full Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input type="number" placeholder="Amount (₦)" className="input" />
              <button type="submit" className="btn">Proceed to Payment</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Give;