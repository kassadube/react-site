import dictionary from '../dictionary';
const translate = (label) => {
   /* if (!global.dictionary || global.isResetDictionary) {
        global.dictionary = JSON.parse(sessionStorage.getItem('dictionary'));
        global.isResetDictionary = false;
    }*/
    //let lang = sessionStorage.getItem('lang');
    //if (lang == null) lang = 1;
    if (dictionary) {
        return dictionary["en"][label] ? dictionary["en"][label] : label;
    }
    return label;
    
};

export default translate;
