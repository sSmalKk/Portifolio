// In your JavaScript file
import * as enData from './en.json';
import * as esData from './pt.json';
import { selectedLanguage } from './components/languagetoggle';
// Determine the selected language (you can get this from user preferences)
const Language = selectedLanguage; // Example: English

// Load the appropriate language data
const languageData = Language === 'pt' ? esData : enData;

// Now you can use languageData to access your localized strings
const { meta, dataabout, dataportfolio, worktimeline, skills, introdata, contactConfig, socialprofils, logotext, titles } = languageData;

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    titles
};