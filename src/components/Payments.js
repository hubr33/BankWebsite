import React, { Component } from "react";
import "../css/Payments.css";

class Payments extends Component {
  state = {};
  render() {
    return (
      <main className="payments">
        <section>
          <div className="paymentsText">
            <h2>Szybkie przelewy, opłaty, lokaty, płatności!</h2>
            <ul>
              <li>Wykonuj przelewy krajowe bez czekania</li>
              <li>Automatyczne opłacanie rachunków</li>
              <li>Płatności mobilne</li>
              <li>Płatności internetowe</li>
              <li>Kredyt przez internet</li>
              <li>Przelewy walutowe</li>
              <li>Pełna satysfakcja oraz fachowa obsługa klienta</li>
            </ul>
          </div>
        </section>
        <aside>
          <div></div>
          <p>National Bank</p>
        </aside>
      </main>
    );
  }
}

export default Payments;
