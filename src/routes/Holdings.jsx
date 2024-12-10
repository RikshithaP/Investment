import React from "react";
import { Link } from "react-router-dom";
import "./Holdings.css";

const Holdings = () => {
  return (
    <div className="holdings-page">
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
          <nav className="nav-menu">
            <ul className="nav-options">
              <li className="nav-item">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="nav-item active">
                <Link to="/orders">Orders</Link>
              </li>
              <li className="nav-item">
                <Link to="/holdings">Holdings</Link>
              </li>
              <li className="nav-item">
                <Link to="/positions">Positions</Link>
              </li>
              <li className="nav-item">
                <Link to="/bids">Bids</Link>
              </li>
              <li className="nav-item">
                <Link to="/funds">Funds</Link>
              </li>
            </ul>
          </nav>

          {/* Summary at the top */}
          <div className="summary-top">
            <p>Total Investment: <span>₹855</span></p>
            <p>Current Value: <span>₹838.50</span></p>
            <p>Day P&L: <span className="loss">-₹12</span></p>
            <p>Total P&L: <span className="loss">-₹17.15</span></p>
          </div>

          <h2>Holdings (2)</h2>

          <table className="holdings-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty</th>
                <th>Avg. Cost</th>
                <th>LTP</th>
                <th>Current Value</th>
                <th>P&L</th>
                <th>Net Chg</th>
                <th>Day Chg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ITBEES</td>
                <td>10</td>
                <td>₹45.05</td>
                <td>₹45.82</td>
                <td>₹458.20</td>
                <td className="gain">+₹7.70</td>
                <td className="gain">+2.17%</td>
                <td className="gain">+1.47%</td>
              </tr>
              <tr>
                <td>NTPC</td>
                <td>1</td>
                <td>₹405.15</td>
                <td>₹380.30</td>
                <td>₹380.30</td>
                <td className="loss">-₹24.85</td>
                <td className="loss">-6.13%</td>
                <td className="loss">-1.47%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">Summary</td>
                <td>₹838.50</td>
                <td className="loss">-₹17.15</td>
                <td className="loss">-2.00%</td>
                <td className="loss">-1.47%</td>
              </tr>
            </tfoot>
          </table>

          <div className="summary-bottom">
            <p>Total Investment: <span>₹855</span></p>
            <p>Current Value: <span>₹838.50</span></p>
            <p>Day P&L: <span className="loss">-₹12</span></p>
            <p>Total P&L: <span className="loss">-₹17.15</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
