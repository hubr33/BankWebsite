import React, { Component } from "react";
import "../css/Start.css";

class Start extends Component {
  state = {
    accountNumber: "87 1010 1397 0055 0022 2100 0000",
    bankName: "National Bank",
    type: "Konto osobiste",
    totalValue: 405204.23,
    blocks: 0,
  };
  contact = [
    { id: 0, text: "Nasza infolinia 24/7 - 600 600 600" },
    { id: 1, text: "Adres e-mail: nationalbank@nb.eu" },
    { id: 2, text: "National Bank S.A" },
    { id: 3, text: "Warszawa, Oddział 1" },
    { id: 4, text: "ul. Złota 1" },
    { id: 5, text: "02-500 Warszawa" },
  ];
  render() {
    const contactList = this.contact.map((con) => (
      <p key={con.id}>{con.text}</p>
    ));
    return (
      <main>
        <aside>
          <div className="btns">
            <div className="exchangerContainer">
              <i className="fas fa-euro-sign"></i>
              <button className="exchanger">Kantor</button>
            </div>
            <div className="transferContainer">
              <i className="fas fa-exchange-alt"></i>
              <button className="transfer">Przelew do odbiorcy</button>
            </div>
          </div>
          <div className="myCard">
            <div className="cardImg"></div>
            <div className="cardNumber">
              <h3>Zalogowany na numer konta</h3>
              <p>{this.state.accountNumber}</p>
            </div>
          </div>
          <div className="contactInfo">{contactList}</div>
        </aside>
        <section>
          <div className="mainInfo">
            <div className="firstInfo">
              <p>{this.state.bankName}</p>
              <p>{this.state.type}</p>
              <p>{this.state.accountNumber}</p>
            </div>
            <div className="accountBalance">
              <div className="balance">
                <p>Saldo: {this.state.totalValue} PLN</p>
                <p>
                  Blokady: <span>{this.state.blocks} </span>PLN
                </p>
              </div>
              <div className="currentBalance">
                <h2>Dostępne środki</h2>
                <p>{this.state.totalValue} PLN</p>
              </div>
              <div className="transferAndHistoryButtons">
                <button className="transferBtn">Przelew</button>
                <button className="historyBtn">Historia</button>
              </div>
            </div>
          </div>
          <div className="operations">
            <div className="operationInfo">
              <h1>Operacje na bieżącym koncie</h1>
              <p>National Bank - Konto osobiste - {this.state.accountNumber}</p>
            </div>
            <div className="operationButtons">
              <button className="accepted">Akceptowane</button>
              <button className="waiting">Oczekujące</button>
              <button className="cancelled">Niezrealizowane</button>
            </div>
            <div className="operationStatus">
              <div className="singleOperation">
                <div className="logo">
                  <i className="fas fa-credit-card"></i>
                </div>
                <div className="personAndTitle">
                  <h2>person</h2>
                  <p>Title</p>
                </div>
                <div className="amount">DUZO</div>
                <div className="balanceAfterTrans">2939.2932</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Start;
