const singleQuotes = '<p>Single quotes</p>';
const doubleQuotes = "<p>Double quotes</p>";
const templateLiteral = `<p> template literal</p>`;

const result = singleQuotes + doubleQuotes + templateLiteral;
document.querySelector('.basic').innerHTML = result;
