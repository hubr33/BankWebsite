import React, { Component } from "react";
import "../css/Start.css";

class Start extends Component {
  state = {
    date: new Date().toISOString().slice(0, 10),
    accountNumber: "87 1010 1397 0055 0022 2100 0000",
    bankName: "National Bank",
    type: "Konto osobiste",
    totalValue: 10000,
    blocks: 0,
    name: "Jan Kowalski",
    title: "Za obiad",
    buttonType: "accepted",
    recipient: [],
    recipientNumber: [],
    recipientTitle: [],
    recipientAmount: [],
    recipientDate: [],
    id: 0,
  };
  contact = [
    { id: 0, text: "Nasza infolinia 24/7 - 600 600 600" },
    { id: 1, text: "Adres e-mail: nationalbank@nb.eu" },
    { id: 2, text: "National Bank S.A" },
    { id: 3, text: "Warszawa, Oddział 1" },
    { id: 4, text: "ul. Złota 1" },
    { id: 5, text: "02-500 Warszawa" },
  ];

  handleAdd = () => {
    const recName = document.querySelector(".recName");
    const recNumber = document.querySelector(".recNumber");
    const recTitle = document.querySelector(".recTitle");
    const recAmount = document.querySelector(".recAmount");
    const recDate = document.querySelector(".recDate");
    if (
      recName.value !== "" &&
      recNumber.value.length === 26 &&
      recTitle.value !== "" &&
      recAmount.value !== ""
    ) {
      this.setState({
        id: this.state.id + 1,
        totalValue: this.state.totalValue - this.state.recipientAmount,
      });
      console.log(this.state.date);
      recName.value = "";
      recNumber.value = "";
      recTitle.value = "";
      recAmount.value = "";
      recDate.value = "";
      recName.classList.remove("er");
      recNumber.classList.remove("er");
      recTitle.classList.remove("er");
      recAmount.classList.remove("er");
      recDate.classList.remove("er");
      this.transferData.push({
        id: this.state.id,
        person: this.state.recipient,
        title: this.state.recipientTitle,
        amount: this.state.recipientAmount,
      });
      const shadow = document.querySelector(".shadow");
      shadow.classList.toggle("active");
      console.log(this.transferData);
    } else {
      recName.classList.add("er");
      recNumber.classList.add("er");
      recTitle.classList.add("er");
      recAmount.classList.add("er");
      recDate.classList.add("er");
    }
  };

  transferData = [];

  handleChange = (evt) => {
    let name = evt.target.name;
    this.setState({ [name]: evt.target.value });
  };

  handleChangeType = (type) => {
    this.setState({ buttonType: type });
    console.log(this.transferData.length);
  };

  handleToggleTransfer = () => {
    const shadow = document.querySelector(".shadow");
    shadow.classList.toggle("active");
    const recName = document.querySelector(".recName");
    const recNumber = document.querySelector(".recNumber");
    const recTitle = document.querySelector(".recTitle");
    const recAmount = document.querySelector(".recAmount");
    const recDate = document.querySelector(".recDate");
    recName.value = "";
    recNumber.value = "";
    recTitle.value = "";
    recAmount.value = "";
    recDate.value = "";
    recName.classList.remove("er");
    recNumber.classList.remove("er");
    recTitle.classList.remove("er");
    recAmount.classList.remove("er");
    recDate.classList.remove("er");
  };

  handleOpenHistory = () => {
    const history = document.querySelector(".historyShadow");
    history.classList.toggle("active");
  };

  render() {
    const contactList = this.contact.map((con) => (
      <p key={con.id}>{con.text}</p>
    ));

    console.log(this.state.recipientAmount);

    const operations = this.transferData.map((op) => (
      <div className="singleOperation">
        <div className="logo">
          <i className="fas fa-credit-card"></i>
        </div>
        <div className="personAndTitle">
          <h2>{op.person}</h2>
          <p>{op.title}</p>
        </div>
        <div className="amount">
          {this.state.recipientDate} | {op.amount} PLN
        </div>
      </div>
    ));

    const operationsHistory = this.transferData.map((op) => (
      <div className="singleOperation">
        <div className="logo">
          <i className="fas fa-credit-card"></i>
        </div>
        <div className="personAndTitle">
          <h2>
            {op.person} | numer konta: {this.state.recipientNumber}
          </h2>
          <p>{op.title}</p>
        </div>
        <div className="amount">
          {this.state.recipientDate} | {op.amount} PLN
        </div>
      </div>
    ));

    return (
      <main>
        <div className="historyShadow">
          <div className="historyWrapper">
            {this.transferData.length === 0 ? (
              <p style={{ textAlign: "center" }}>Brak operacji</p>
            ) : null}
            <button className="closeHistory" onClick={this.handleOpenHistory}>
              Zamknij
            </button>
            {operationsHistory}
          </div>
        </div>
        <aside>
          <div className="btns">
            <div className="exchangerContainer">
              <i className="fas fa-euro-sign"></i>
              <button className="exchanger">Kantor</button>
            </div>
            <div className="transferContainer">
              <i className="fas fa-exchange-alt"></i>
              <button className="transfer" onClick={this.handleToggleTransfer}>
                Przelew do odbiorcy
              </button>
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
                <p>Saldo: {this.state.totalValue.toFixed(2)} PLN</p>
                <p>
                  Blokady:{" "}
                  <span>
                    {this.state.recipientAmount.length === 0
                      ? 0
                      : this.state.recipientAmount}{" "}
                  </span>
                  PLN
                </p>
              </div>
              <div className="currentBalance">
                <h2>Dostępne środki</h2>
                <p>{this.state.totalValue.toFixed(2)} PLN</p>
              </div>
              <div className="transferAndHistoryButtons">
                <div className="shadow">
                  <div className="transferPanel">
                    <button
                      className="cancelTransfer"
                      onClick={this.handleToggleTransfer}
                    >
                      Zamknij
                    </button>
                    <div className="recipient">
                      <p>Odbiorca</p>
                      <input
                        className="recName"
                        type="text"
                        name="recipient"
                        onChange={this.handleChange}
                        placeholder="Wpisz nazwę odbiorcy"
                      />
                    </div>

                    <div className="accountNumber">
                      <p>Numer konta</p>
                      <input
                        className="recNumber"
                        type="number"
                        minLength="1"
                        maxLength="5"
                        name="recipientNumber"
                        onChange={this.handleChange}
                        placeholder="Wpisz numer konta"
                      />
                    </div>
                    <div className="transferTitle">
                      <p>Tytuł</p>
                      <input
                        className="recTitle"
                        type="text"
                        name="recipientTitle"
                        onChange={this.handleChange}
                        placeholder="Wpisz tytuł przelewu"
                      />
                    </div>
                    <div className="transferAmount">
                      <p>Kwota</p>
                      <input
                        className="recAmount"
                        type="number"
                        name="recipientAmount"
                        onChange={this.handleChange}
                        placeholder="0.00"
                      />
                    </div>
                    <div className="transferData">
                      <p>Data przelewu</p>
                      <input
                        className="recDate"
                        name="recipientDate"
                        onChange={this.handleChange}
                        type="date"
                        min={this.state.date}
                      />
                    </div>
                    <div className="buttonSection">
                      <button onClick={this.handleAdd}>Akceptuj</button>
                    </div>
                  </div>
                </div>
                <button
                  className="transferBtn"
                  onClick={this.handleToggleTransfer}
                >
                  Przelew
                </button>
                <button className="historyBtn" onClick={this.handleOpenHistory}>
                  Historia
                </button>
              </div>
            </div>
          </div>
          <div className="operations">
            <div className="operationInfo">
              <h1>Operacje na bieżącym koncie</h1>
              <p>National Bank - Konto osobiste - {this.state.accountNumber}</p>
            </div>
            <div className="operationButtons">
              <button
                className="accepted"
                onClick={() => this.handleChangeType("accepted")}
              >
                Akceptowane
              </button>
              <button
                className="waiting"
                onClick={() => this.handleChangeType("waiting")}
              >
                Oczekujące
              </button>
              <button
                className="cancelled"
                onClick={() => this.handleChangeType("cancelled")}
              >
                Niezrealizowane
              </button>
            </div>
            <div className="operationStatus">
              {this.transferData.length === 0 ? (
                <p style={{ textAlign: "center" }}>Brak operacji</p>
              ) : null}
              {this.state.buttonType === "accepted" ? operations : null}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Start;
