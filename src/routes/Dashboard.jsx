import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <header className="header">
        <div className="market-status">
          <span>NIFTY 50: 23883.45 ▼ -527.85 (-2.17%)</span>
          <span>SENSEX: 78675.18 ▼ -820.97 (-1.03%)</span>
        </div>
      </header>
      <div className="dashboard-container">
        <div className="sidebar">
          <input
            type="text"
            placeholder="Search eg: nifty, stocks..."
            className="search-bar"
          />
          <ul className="stocks-list">
            <li className="stock-item">
              <span>RELIANCE</span>
              <span className="gain">+1.55 (0.12%) ₹1274.25</span>
            </li>
            <li className="stock-item">
              <span>TCS</span>
              <span className="loss">-1.30 (-0.03%) ₹4197.40</span>
            </li>
            <li className="stock-item">
              <span>HDFCBANK</span>
              <span className="loss">-48.10 (-2.72%) ₹1718.20</span>
            </li>
            <li className="stock-item">
              <span>BHARTIARTL</span>
              <span className="loss">-4.90 (-0.31%) ₹1555.65</span>
            </li>
            <li className="stock-item">
              <span>ICICIBANK</span>
              <span className="gain">+1.30 (0.10%) ₹1270.60</span>
            </li>
            <li className="stock-item">
              <span>ITC</span>
              <span className="loss">-4.10 (-0.86%) ₹472.85</span>
            </li>
          </ul>
        </div>
        <div className="main-dashboard">
          {/* Navigation Menu */}
          <nav className="nav-menu">
            <ul className="nav-options">
              <li className="nav-item active">Dashboard</li>
              <li className="nav-item">Orders</li>
              <li className="nav-item">Holdings</li>
              <li className="nav-item">Positions</li>
              <li className="nav-item">Bids</li>
              <li className="nav-item">Funds</li>
            </ul>
          </nav>

          <div className="welcome-section">
            <h2>Hi, Shivakumar</h2>
          </div>
          <div className="summary-section">
            <div className="equity">
              <h3>Equity</h3>
              <p>0</p>
              <p>Margin available</p>
              <button
                className="link-style-button"
                onClick={() => console.log("View Equity Statement clicked!")}
              >
                View statement
              </button>
            </div>
            <div className="commodity">
              <h3>Commodity</h3>
              <p>0</p>
              <p>Margin available</p>
              <button
                className="link-style-button"
                onClick={() => console.log("View Commodity Statement clicked!")}
              >
                View statement
              </button>
            </div>
          </div>
          <div className="holdings-section">
            <h3>Holdings (2)</h3>
            <p className="pnl">P&L: -17.15 (-2.00%)</p>
            <div className="chart">
              <div className="chart-bar">
                <div className="current-value" style={{ width: "60%" }}>
                  ₹838.50
                </div>
              </div>
              <div className="investment">Investment value: ₹655.65</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
