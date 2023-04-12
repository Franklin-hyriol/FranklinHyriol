import { Container, Background } from "./App.styled";
import GlobalStyle from "./GlobalStyle.styled";
import { dark, light } from "./Theme.styled";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";

/* Page */
import Information from "./page/Information/Information";
import Competence from "./page/Competence/Competence";
import MesProjets from "./page/MesProjets/MesProjets";
import Contact from "./page/Contact/Contact";

import Content from "./components/Content/Content";
import { useSelector } from "react-redux";

/* Theme */
import BgLight from './assets/bg-light.jpg';
import BgDark from './assets/bg-dark.jpg';


function App() {

  const checkTheme = useSelector(state => state.theme.value);

  return (
    <ThemeProvider theme={checkTheme === 'light' ? light : dark}>
      <GlobalStyle />
      <Container>
        <Background src={checkTheme === 'light' ? BgLight : BgDark} alt="bacground" />
        <Routes>
          <Route path="/" element={<Content />} >
            <Route index element={<Information />} />
            <Route path="/competence" element={<Competence />} />
            <Route path="/mes_projets" element={<MesProjets />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;



