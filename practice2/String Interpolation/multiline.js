const fruitList = 
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

const vegetableList = `
   <ul>
    <li>Kiwi</li>
    <li>Lime</li>
    <li>Pineapple</li>
   </ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;
