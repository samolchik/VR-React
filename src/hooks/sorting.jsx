
// import { useState } from "react";

// const [cards, setCards] = useState(
//   JSON.parse(localStorage.getItem("cards")) || []
// );
// export const handleSortCards = (e) => {
//   switch (e.target.value) {
//     case "New first":
//       const newCards = cards.sort((a, b) => a.id - b.id);
//       localStorage.setItem("cards", JSON.stringify(newCards));
//       break;
//     case "New last":
//       const lastCards = cards.sort((a, b) => b.id - a.id);
//       localStorage.setItem("cards", JSON.stringify(lastCards));
//       break;
//     default:
//       break;
//   }
//   setCards(JSON.parse(localStorage.getItem("cards")));
// };
