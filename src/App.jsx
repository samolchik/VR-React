import {
  Header,
  Hero,
  Experience,
  Video,
  Pagination,
  Clients,
  AboutCompany,
  Footer,
} from "./components";
import { CLIENTS, ABOUT_COMPANY } from "./Mock";
import { useState } from "react";

export const App = () => {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  const [auditUser, setAuditUser] = useState(() => {
    if (!localStorage.getItem("user")) {
      return false;
    }

    return true;
  });


  const handleSortCards = (e) => {
    switch (e.target.value) {
      case "New first":
        const newCards = cards.sort((a, b) => a.id - b.id);
        localStorage.setItem("cards", JSON.stringify(newCards));
        break;
      case "New last":
        const lastCards = cards.sort((a, b) => b.id - a.id);
        localStorage.setItem("cards", JSON.stringify(lastCards));
        break;
      default:
        break;
    }
    setCards(JSON.parse(localStorage.getItem("cards")));
  };

  return (
    <div className="App">
      <Header setAuditUser={setAuditUser} />
      <Hero setCards={setCards} auditUser={auditUser} />
      <Experience />
      <Video />
      <div className="headsets">
        <Pagination
          itemsPerPage={6}
          items={cards}
          handleSortCards={handleSortCards}
    
        />
      </div>
      <Clients clients={CLIENTS} />
      <AboutCompany aboutCompany={ABOUT_COMPANY} />
      <Footer />
    </div>
  );
};
