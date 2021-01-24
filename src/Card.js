import { CameraOutlined, FrownOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./App.css";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import chelsyProfile from "./big-head.jpg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const Card = () => {
  const [currentStep, setStep] = useState(0);
  const [food, setFood] = useState(null);
  const [rejectCounter, setCounter] = useState(99);
  // const wrongResponse = [
  //   "Um.... Ok",
  //   "You're right! Always",
  //   "Well, everything has 2 sides",
  // ];

  const steps = [
    {
      q:
        "There will be about 10 questions for you to complete the intelligence test.",
      a: (
        <button onClick={() => setStep((prev) => prev + 1)} className="btnNext">
          Sure
        </button>
      ),
    },
    {
      q: "Your Gender?",
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Male
          </button>

          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Female
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Not Sure
          </button>
        </div>
      ),
    },
    {
      q: "1 + 1 = ?",
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            2
          </button>

          <button
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            11
          </button>
        </div>
      ),
    },
    {
      q: (
        <p style={{ display: "inline" }}>
          Which number should come next in the pattern? &nbsp;{" "}
          <span>2, 4, 6, 8</span>
        </p>
      ),
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            10
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            12
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            16
          </button>
          <button
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            0
          </button>
        </div>
      ),
    },

    {
      q: (
        <p style={{ display: "inline" }}>
          Which number should come next in the pattern? &nbsp;{" "}
          <span>1, 3, 5 </span>
        </p>
      ),
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            0
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            7
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            11
          </button>
          <button
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            I don't know
          </button>
        </div>
      ),
    },
    {
      q: (
        <p style={{ display: "inline" }}>
          Which item should come next in the pattern? &nbsp;{" "}
          <span>Japanese, Korean, </span>
        </p>
      ),
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Italy
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Italian
          </button>
        </div>
      ),
    },
    {
      q: (
        <p style={{ display: "inline" }}>
          Which item should come next in the pattern? &nbsp;{" "}
          <span>Daniel Choi, Chelsy ? </span>
        </p>
      ),
      a: (
        <div className="btnGroup">
          <button
            onClick={() => {
              NotificationManager.error(<FrownOutlined />);
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            Li
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Choi
          </button>
        </div>
      ),
    },
    {
      q: "Food you preferred?",
      a: (
        <div className="btnGroup">
          <button
            onClick={() => {
              setFood("Vietnamese");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            Vietnamese
          </button>

          <button
            onClick={() => {
              setFood("Korean");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            Korean
          </button>
          <button
            onClick={() => {
              setFood("Italian");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            Italian
          </button>
             <button
            onClick={() => {
              setFood("German");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            German
          </button>
          <button
            onClick={() => {
              setFood("Japanese");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            Japanese
          </button>
          <button
            onClick={() => {
              setFood("American");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            American
          </button>
          <button
            onClick={() => {
              setFood("Surprise Me");
              setStep((prev) => prev + 1);
            }}
            className="btnNext"
          >
            Surprise Me -> not recommended
          </button>
        </div>
      ),
    },
    {
      q: "What's Daniel's favorite food?",
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Japanese BBQ
          </button>
        </div>
      ),
    },

    {
      q: (
        <div>
          <span>Will you go on a date with me on valentines day ;)</span>
          <br />
          <span style={{ fontSize: "0.6em" }}>
            Maybe just dinner cuz you might need to work?
          </span>
        </div>
      ),
      a: (
        <div className="btnGroup">
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Yes
          </button>

          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            Sure
          </button>
          <button
            onClick={() => setStep((prev) => prev + 1)}
            className="btnNext"
          >
            I LOVE to
          </button>
          <button
            onClick={() => setCounter((prev) => prev - 1)}
            className="btnNext"
          >
            {rejectCounter < 99
              ? `Press ${rejectCounter} times to reject me`
              : "Um..."}
          </button>
        </div>
      ),
    },
    {
      q: (
        <span style={{ fontSize: "0.5em" }}>
          Screenshot this and send back to me to make the reservation with me.
        </span>
      ),
      a: (
        <div className="btnGroup">
          <button
            style={{
              position: "absolute",
              bottom: "0",
            }}
            onClick={() => {
              htmlToImage
                .toPng(document.getElementById("root"))
                .then(function (dataUrl) {
                  download(dataUrl, "date-with-daniel.png");
                });
            }}
            className="btnNext"
          >
            Screenshot&nbsp;
            <CameraOutlined />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="App-container">
      <NotificationContainer />

      {currentStep !== steps.length - 1 ? (
        <>
          {" "}
          <h2
            style={{
              fontWeight: "100",
              margin: "auto",
              width: "80vw",
              position: "absolute",
              top: "38%",
            }}
          >
            {steps[currentStep].q}
          </h2>
          <div className="btnContainer"> {steps[currentStep].a}</div>
          {currentStep > 1 ? (
            <button
              className="btnNext"
              onClick={() => setStep((prev) => prev - 1)}
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                background: "#38466387",
              }}
            >
              Back
            </button>
          ) : null}
        </>
      ) : (
        <div id="result">
          {" "}
          <img
            src={chelsyProfile}
            style={{
              width: "180px",
              borderRadius: "50%",
            }}
          />{" "}
          <br />
          <span style={{ fontSize: "2em" }}>Congrats Chelsy!</span> <br />
          <p style={{ fontSize: "0.6em" }}>
            <span>Food Preferred:</span> {food}
          </p>
          <p style={{ fontSize: "0.6em" }}>
            <span>Intelligent Test:</span> Unidentified
          </p>
          <div className="btnGroup">
            <span
              style={{
                fontSize: "0.7em",
                position: "absolute",
                bottom: "0",
                left: "8px",
              }}
            >
              Screenshot this and send it back to me to make the reservation
              with me.
            </span>{" "}
            <button
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
              }}
              onClick={() => {
                htmlToImage
                  .toPng(document.getElementById("root"))
                  .then(function (dataUrl) {
                    download(dataUrl, "date-with-daniel.png");
                  });
              }}
              className="btnNext"
            >
              Screenshot&nbsp;
              <CameraOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
