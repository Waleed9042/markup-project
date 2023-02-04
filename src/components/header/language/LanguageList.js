import PropTypes from "prop-types";
import LanguageLink from "./LanguageLink";

function LanguageList({ selectedLanguage = "", languageData = [] }) {
  const length = languageData.length;
  return (
    <div id="language" className="header-language js-language-popup">
      <div className="header-language__name">{selectedLanguage}</div>
      <div className="header-language-popup">
        <ul>
          {languageData &&
            languageData.map((language, index) => {
              if (length === index + 1) {
                return (
                  <li key={`lang-${index}`}>
                    <a href={language.href}>{language.linkTitle}</a>
                  </li>
                );
              }
              return (
                <LanguageLink
                  key={`${language.lang}-${index}`}
                  lang={language.lang}
                  name={language.name}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

LanguageList.defaultProps = {
  selectedLanguage: "English",
  languageData: [],
};

LanguageList.propTypes = {
  selectedLanguage: PropTypes.string,
  languageData: PropTypes.array,
};

export default LanguageList;
