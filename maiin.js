// ПЕРЕТВОРЕННЯ В РЯДОК ЗА ДОПОМОГОЮ FOR

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
// let friendlist = "";
// for (const friend of friends) {
//     friendlist += friend + ","

// }
// console.log(friendlist);


// ПЕРЕТВОРЕННЯ В РЯДОК ЗА ДОПОМОГОЮ JOIN

const friends = ["Mango", "Poly", "Kiwi", "Ajax"]
const friendlist = friends.join(",");
console.log(friendlist);




const cards = ["карточка 1", "карточка 2", "карточка 3", "карточка 4", "карточка 5"];
cards.splice(1, 3);
console.log(cards);