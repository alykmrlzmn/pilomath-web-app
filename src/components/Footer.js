import React from "react";

function Footer() {
  return (
    <div className="row">
      <label htmlFor="all">
        <input type="checkbox" name="all" id="all" />
        ALL
      </label>
      <p>you have 0 things to do</p>
      <div class="col">
        <button id="delete">Delete</button>
      </div>
    </div>
  );
}
export default Footer;
