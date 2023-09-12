// In your JavaScript file
import * as enData from './en.json';
import * as esData from './pt.json';

// Determine the selected language (you can get this from user preferences)
const selectedLanguage = 'pt'; // Example: English

// Load the appropriate language data
const languageData = selectedLanguage === 'pt' ? esData : enData;

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