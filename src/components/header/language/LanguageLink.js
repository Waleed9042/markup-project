import PropTypes from "prop-types";

function LanguageLink({ lang = "", name = "", key = "" }) {
  return (
    <li id={`lang-${lang}`} key={key}>
      <a lang={lang} className="langauge-option no-app">
        <i className={`header-lang-icon-${lang}`}></i>
        {name}
      </a>
    </li>
  );
}

LanguageLink.defaultProps = {
  lang: "en",
  name: "English",
  key: ""
};

LanguageLink.propTypes = {
  lang: PropTypes.string,
  name: PropTypes.string,
  key: PropTypes.string
};

export default LanguageLink;
