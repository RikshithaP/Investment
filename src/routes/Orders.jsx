import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

const OrdersPage = () => {
  return (
    <div className="orders-page">
      <header className="header">
        <div className="market-status">
          <span>NIFTY 50: 23883.45 ▼ -527.85 (-2.17%)</span>
          <span>SENSEX: 78675.18 ▼ -820.97 (-1.03%)</span>
        </div>
      </header>
      <div className="orders-container">
        <div className="sidebar">
          <input
            type="text"
            placeholder="Search eg: nifty, bse, nifty fut, index fund, etc"
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
        <div className="main-orders">
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
          <div className="orders-content">
            <h3>You haven't placed any orders today</h3>
            <button className="primary-button">Get started</button>
            <p>
              <Link to="/history" className="view-history-link">
                View history
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

