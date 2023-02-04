import { useState } from "react";

function AbuseForm() {
  const [selectedValue, setSelectedValue] = useState("");
  const [email, setEmail] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    setSelectedValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  
  return (
    <form action="reportabuse.php" method="POST" id="report-abuse-form">
      <span>Why would you like to report this image?</span>
      <br />
      <input type="hidden" name="id" value="29mndlg" />
      <div id="report-abuse-radio">
        <input
          type="radio"
          name="reason"
          id="report-abuse-personal"
          value="Personal"
          checked={selectedValue === "Personal"}
          onChange={handleOnChange}
        />
        <label for="report-abuse-personal">Personal information</label>
        <br />
        <input
          type="radio"
          name="reason"
          value="Sexual"
          id="report-abuse-sexual"
          checked={selectedValue === "Sexual"}
          onChange={handleOnChange}
        />
        <label for="report-abuse-sexual">
          Sexually explicit or violent content
        </label>
        <br />
      </div>
      <div id="report-abuse-info">
        <label for="report-abuse-email">Your e-mail address</label>
        <input
          type="email"
          name="email"
          id="report-abuse-email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
      </div>
      <div id="report-abuse-buttons">
        <input
          type="submit"
          value="Report"
          id="report-abuse-report"
        />
        <input
          type="submit"
          value="Cancel"
          id="report-abuse-cancel"
        />
      </div>
    </form>
  );
}

export default AbuseForm;
