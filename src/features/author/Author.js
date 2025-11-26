import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Author() {

  return (

    <Container>

      <Header
        title="O autorze"
      />

      <Section
        title="Michał Kowalczyk"
        body={
          <>
            <h2 class="article__header">
                Jestem architektem po studiach 5 letnich w trakcie robienia uprawnień budowlanych.
                Moje motto życiowe to:
            </h2>
            <h3 class="article__header article__header--boldItalic">"Po co gadać, jeśli wszystko wiadomo, a jeśli nic
                nie wiadomo, to po co gadać?"
            </h3></>
        }
      />

    </Container>
  );
}

export default Author;