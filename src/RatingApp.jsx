import React, { useState } from "react";
import "./index.css";

import iconStar from "./images/icon-star.svg";
import illustrationThankYou from "./images/illustration-thank-you.svg";

const translations = {
  hr: {
    howDidWeDo: "Kako smo prošli?",
    description:
      "Molimo vas da nas ocijenite. Svaka povratna informacija je dobrodošla!",
    submit: "POŠALJI",
    areYouSure: "Jeste li sigurni?",
    yourRating: "Vaša ocjena:",
    yes: "DA",
    no: "NE",
    whatToDo: "Što želite učiniti?",
    rateAgain: "OCIJENI PONOVNO",
    declinedText: "Ne želite nas ocijeniti? Recite nam zašto (opcionalno):",
    placeholder: "Vaš komentar...",
    noRateBtn: "NE ŽELIM OCIJENITI",
    thanks: "Hvala vam!",
    selected: "Odabrali ste",
    outOf: "od 5",
    finalText: "Vaše povratne informacije su nam dragocjene.",
  },
  en: {
    howDidWeDo: "How did we do?",
    description:
      "Please let us know how we did with your support request. All feedback is appreciated!",
    submit: "SUBMIT",
    areYouSure: "Are you sure?",
    yourRating: "Your rating:",
    yes: "YES",
    no: "NO",
    whatToDo: "What would you like to do?",
    rateAgain: "RATE AGAIN",
    declinedText: "Don't want to rate us? Tell us why (optional):",
    placeholder: "Your comment...",
    noRateBtn: "I DON'T WANT TO RATE",
    thanks: "Thank you!",
    selected: "You selected",
    outOf: "out of 5",
    finalText: "We appreciate you taking the time to give a rating.",
  },
};

function RatingApp() {
  const [lang, setLang] = useState(null);
  const [rating, setRating] = useState(null);
  const [status, setStatus] = useState("rating");
  const [comment, setComment] = useState("");

  if (!lang) {
    return (
      <main className="container">
        <div className="card thank-you">
          <div className="language-picker">
            <div className="lang-group">
              <h1 className="lang-title">Odaberi</h1>
              <div className="lang-option" onClick={() => setLang("hr")}>
                <img src="https://flagcdn.com/w160/hr.png" alt="Hrvatski" />
                <span>HRVATSKI</span>
              </div>
            </div>

            <div className="lang-group">
              <h1 className="lang-title">Choose</h1>
              <div className="lang-option" onClick={() => setLang("en")}>
                <img src="https://flagcdn.com/w160/gb.png" alt="English" />
                <span>ENGLISH</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const t = translations[lang];

  if (status === "submitted") {
    return (
      <main className="container">
        <div className="card thank-you">
          <img
            src={illustrationThankYou}
            alt="Thank you"
            className="img-thank-you"
          />
          {rating && (
            <div className="selection-badge">
              {t.selected} {rating} {t.outOf}
            </div>
          )}
          <h1>{t.thanks}</h1>
          <p>{t.finalText}</p>
        </div>
      </main>
    );
  }

  if (status === "declined-options") {
    return (
      <main className="container">
        <div className="card">
          <h1>{t.whatToDo}</h1>
          <div className="confirm-buttons">
            <button className="submit-btn" onClick={() => setStatus("rating")}>
              {t.rateAgain}
            </button>
            <div className="decline-section">
              <p>{t.declinedText}</p>
              <textarea
                className="comment-box"
                placeholder={t.placeholder}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="back-btn full-width"
                onClick={() => {
                  setRating(null);
                  setStatus("submitted");
                }}
              >
                {t.noRateBtn}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (status === "confirming") {
    return (
      <main className="container">
        <div className="card thank-you">
          <h1>{t.areYouSure}</h1>
          <div className="confirm-display">
            <span className="text-light">{t.yourRating}</span>
            <span className="rating-token">{rating}</span>
          </div>
          <div className="confirm-buttons">
            <button
              className="submit-btn"
              onClick={() => setStatus("submitted")}
            >
              {t.yes}
            </button>
            <button
              className="back-btn"
              onClick={() => setStatus("declined-options")}
            >
              {t.no}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card">
        <div className="icon-box">
          <img src={iconStar} alt="Star" />
        </div>
        <h1>{t.howDidWeDo}</h1>
        <p>{t.description}</p>
        <div className="rating-row">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`circle-btn ${rating === num ? "active" : ""}`}
              onClick={() => setRating(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          className="submit-btn"
          onClick={() => rating !== null && setStatus("confirming")}
          disabled={rating === null}
        >
          {t.submit}
        </button>
      </div>
    </main>
  );
}

export default RatingApp;
