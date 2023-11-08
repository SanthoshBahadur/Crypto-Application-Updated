import React from "react";

function Feedback() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "80.5vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div class="cardd">
        <p class="headingCard">Feedback</p>

        <div class="input-div">
          <input type="text" class="input" placeholder="Email" />
        </div>
        <div class="input-div">
          <input class="input" type="text" placeholder="Phone" />
        </div>
        <div class="input-div">
          <input class="input" type="text" placeholder="Message" />
        </div>
        <div class="button-div">
          <button class="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
