import AbuseForm from "./AbuseForm";

function ReportAbuse() {
  return (
    <div id="report-abuse-overlay">
      <div id="report-abuse-background" />
      <div id="report-abuse-form-wrapper">
        <AbuseForm />
      </div>
    </div>
  );
}

export default ReportAbuse;
