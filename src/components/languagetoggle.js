import React, {useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

// Declare selectedLanguage here and assign a default value
const selectedLanguage = "en";

const Languagetoggle = () => {
  // Use localStorage to store the selected language
  const [language, setLanguage] = useState(() => {
    // Check if a language preference is stored in localStorage
    const storedLanguage = localStorage.getItem("selectedLanguage");
    // If not found, default to the value of selectedLanguage
    return storedLanguage || selectedLanguage;
  });

  // Handle language toggle
  const onToggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    // Save the selected language in localStorage
    localStorage.setItem("selectedLanguage", newLanguage);
  };

  return (
    <div className="nav_ac" onClick={onToggleLanguage}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Languagetoggle;
export { selectedLanguage };
