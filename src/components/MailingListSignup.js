import React from "react"
import "./MailingListSignup.scss"

export default () => (
  <form
    id="subForm"
    className="js-cm-form"
    action="https://www.createsend.com/t/subscribeerror?description="
    method="post"
    data-id="A61C50BEC994754B1D79C5819EC1255C36B87A395A8D1719DEB3C214961E1B5D8CDB43C485C4B6297167FBD82C95FDF7F0971B3A368E9190BB7CF6C61AE6B351">
    <input
      id="fieldEmail"
      name="cm-ykhyxr-ykhyxr"
      type="email"
      className="js-cm-email-input"
      placeholder="name@example.com"
      required
    />
    <button className="js-cm-submit-button" type="submit">
      Get updates <span role="img" aria-label="pigeon">🕊️</span>
    </button>
    {/* Uses createsend js tag in html.js */}
  </form>
)
