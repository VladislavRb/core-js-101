/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

function concatenateStrings(value1, value2) {
    return value1.concat(value2);
}

function getStringLength(value) {
    return value.length;
}

function getStringFromTemplate(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}

function extractNameFromTemplate(templateString) {
    return templateString.slice(7, -1);
}

function getFirstChar(str) {
    return str[0];
}

function removeLeadingAndTrailingWhitespaces(str) {
    return str.trim();
}

function repeatString(str, count) {
    return Array.from(new Array(count), (x) => str).join('');
}

function removeFirstOccurrences(str, value) {
    const ind = str.indexOf(value);
    const arr = Array.from(str);
    arr.splice(ind, value.length);
    return arr.join('');
}

function unbracketTag(str) {
    return str.slice(1, -1);
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function extractEmails(str) {
    const emails = str.split(';');
    return emails;
}

function getRectangleString(width, height) {
    const topStr = '┌' + Array.from(new Array(width - 2), (x) => '─').join('') + '┐\n';
    const bottomStr = '└' + Array.from(new Array(width - 2), (x) => '─').join('') + '┘\n';
    let str = topStr;
    const middleStr = '│' + Array.from(new Array(width - 2), (x) => ' ').join('') + '│\n';
    for (let i = 1; i < height - 1; i += 1) {
        str += middleStr;
    }
    str += bottomStr;
    return str;
}

function encodeToRot13(str) {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const otherSymbols = ' ?!';
    let newStr = '';
    for (let i = 0; i < str.length; i += 1) {
        if (!alphabetLower.includes(str[i]) && !alphabetUpper.includes(str[i])) {
            newStr += otherSymbols[otherSymbols.indexOf(str[i])];
        }
        else {
            const ind = alphabetLower.indexOf(str[i]);
            if (ind === -1) {
                const upperInd = alphabetUpper.indexOf(str[i]);
                newStr += alphabetUpper[(upperInd + 13) % alphabetUpper.length];
            }
            else {
                newStr += alphabetLower[(ind + 13) % alphabetLower.length];
            }
        }
    }
    return newStr;
}

function isString(value) {
    if (value === null || value === undefined) {
        return false;
    }
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            return false;
        }
        return Array.from(value).every((x) => typeof x === 'string');
    }
    return typeof value === 'string';
}

function getCardId(value) {
    const cards = ['A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];
    return cards.indexOf(value);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
