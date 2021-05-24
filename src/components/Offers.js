import React, { Component } from "react";
import "../css/Offers.css";

class Offers extends Component {
  state = {};

  offers = [
    {
      id: 0,
      text: "Od lata 2020 dostępne są konta za 0 dla młodzieży poniżej 16 roku życia!",
    },
    {
      id: 1,
      text: "Konta wielowalutowe pobierają tylko prowizje 0.05%!",
    },
    {
      id: 2,
      text: "Darmowe przelewy miedzynarodowe",
    },
    {
      id: 3,
      text: "Opłacaj rachunki poprzez National Bank Payments automatycznie",
    },
  ];
  render() {
    const paymentsArray = this.offers.map((offer) => (
      <div key={offer.id} className="singleOffer">
        <p>{offer.text}</p>
      </div>
    ));
    return (
      <main className="offers">
        <div className="offersWraper">{paymentsArray}</div>
      </main>
    );
  }
}

export default Offers;
