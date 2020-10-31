import React from "react";
import { DashboardStyles } from "./styles/DashboardStyles";

const Dashboard = () => {
  return (
    <DashboardStyles>
      <div className="dashboard-wrapper">
        <aside className="dashboard-sidebar">
          <img src="/images/iu-logo.png" alt="iu logo" className="logo" />
          <div className="menu">
            <div className="menu-item">
              <i className="fal fa-wallet menu-icon"></i>
              <span className="menu-title">Wallet</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
            <div className="menu-item">
              <i className="fal fa-money-bill menu-icon"></i>
              <span className="menu-title">Deposit - Withdrawal</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
            <div className="menu-item">
              <i className="fal fa-exchange menu-icon"></i>
              <span className="menu-title">Transfer</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
            <div className="menu-item">
              <i className="fal fa-credit-card menu-icon"></i>
              <span className="menu-title">Pay Service</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
            <div className="menu-item">
              <i className="fal fa-phone menu-icon"></i>
              <span className="menu-title">Phone Rechange</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
            <div className="menu-item">
              <i className="fal fa-id-card menu-icon"></i>
              <span className="menu-title">My ui Card</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
            <div className="menu-item">
              <i className="fal fa-wave-triangle menu-icon"></i>
              <span className="menu-title">Movement</span>
              <i className="fal fa-arrow-right menu-arrow"></i>
            </div>
          </div>
        </aside>
        <main className="dashboard-main">
          <div className="dashboard-main-item">
            <div className="transfer">
              <div className="card">
                <div className="card-item">
                  <div className="card-header">
                    <div className="card-header-brand">
                      <i className="fal fa-draw-polygon"></i>
                    </div>
                    <img
                      src="/images/iu-logo.png"
                      alt=""
                      className="card-header-logo"
                    />
                  </div>
                  <div className="card-number">
                    <span className="card-number-item">5468</span>
                    <span className="card-number-item">3500</span>
                    <span className="card-number-item">9208</span>
                    <span className="card-number-item">6180</span>
                  </div>
                  <div className="card-footer">
                    <h3 className="card-money">$ 7,610.00</h3>
                    <div className="card-circle"></div>
                  </div>
                </div>
                <div className="card-navigation">
                  <div className="card-navigation-item is-active"></div>
                  <div className="card-navigation-item"></div>
                  <div className="card-navigation-item"></div>
                </div>
              </div>
              <h2 className="transfer-heading">Transfer</h2>
              <div className="tab">
                <div className="tab-item is-active">Send</div>
                <div className="tab-item">Apply for</div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="payto" className="form-label">
                    Pay to
                  </label>
                  <input
                    type="text"
                    className="form-input is-center"
                    id="payto"
                    value="fad24dfacmmdf8797sdfcsd097"
                  />
                  <p className="form-notice">
                    Please enter the Wallet ID or destination email.
                  </p>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-input"
                    id="amount"
                    value="300.00"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reason" className="form-label">
                    Reason
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    id="reason"
                    value="Pay games"
                  />
                </div>
              </div>
              <div className="transfer-total">
                <div className="transfer-total-item">Commission: $3</div>
                <div className="transfer-total-item">Total: 303.00</div>
              </div>
              <button className="transfer-send">
                <i className="fal fa-paper-plane"></i>
                <span>Send</span>
              </button>
            </div>
          </div>
          <div className="dashboard-main-item">
            <div className="dashboard-tool">
              <div className="search">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                />
                <button className="search-submit">
                  <i className="fal fa-search search-icon"></i>
                </button>
              </div>
              <div className="noti dashboard-tool-item">
                <i className="fal fa-bell dashboard-tool-icon"></i>
                <span className="noti-count">26</span>
              </div>
              <div className="user dashboard-tool-item">
                <i className="fal fa-user dashboard-tool-icon"></i>
              </div>
            </div>
            <div className="balance">
              <div className="balance-item">
                <h4 className="balance-heading">Balance</h4>
                <h3 className="balance-money">$ 7,610.00</h3>
                <div className="balance-price">
                  <div className="balance-price-item">
                    <i className="fa fa-arrow-right balance-arrow"></i>
                    <span className="balance-up">+ $ 6.220.13</span>
                  </div>
                  <div className="balance-price-item">
                    <i className="fa fa-arrow-left balance-arrow"></i>
                    <span className="balance-down">- $ 919.60</span>
                  </div>
                </div>
              </div>
              <div className="balance-item">
                <i className="balance-icon fa fa-dollar-sign"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </DashboardStyles>
  );
};

export default Dashboard;
