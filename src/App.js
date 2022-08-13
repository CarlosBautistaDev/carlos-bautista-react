import { useEffect, useState } from "react";
import atlantiaImg from "./assets/img/atlantia.png";
import ChartEvo from "./components/ChartEvo";
import ChartPrecense from "./components/ChartPresence";
import ShowTable from "./components/ShowTable";
import { getEvo, getPrecense, getTable } from "./services/apiClient";
import {
  Container,
  Header,
  Img,
  P,
  Row,
} from "./styled-components/container.styles";
import { GlobalStyle } from "./styled-components/GlobalStyles";
import Load from "./assets/img/load.gif";
function App() {
  const [evoData, setEvoData] = useState(null);
  const [presenceData, setPresenceData] = useState(null);
  const [tableData, setTableData] = useState(null);
  useEffect(() => {
    getEvo().then((evo) => {
      setEvoData(evo);
    });
    getPrecense().then((pieData) => {
      setPresenceData(pieData);
    });
    getTable().then((table) => {
      setTableData(table);
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Img src={atlantiaImg} className="logo" alt="atlantia logo" />
        </Header>
        <P>General Perfomance Analysis</P>
        <Row>
          {evoData !== null ? (
            <ChartEvo data={evoData} />
          ) : (
            <img src={Load} alt="loading.." />
          )}
          {presenceData !== null ? (
            <ChartPrecense data={presenceData} />
          ) : (
            <img src={Load} alt="loading..." />
          )}
        </Row>
        {tableData !== null ? (
          <ShowTable data={tableData} />
        ) : (
          <img src={Load} alt="loading.." />
        )}
      </Container>
    </>
  );
}

export default App;
