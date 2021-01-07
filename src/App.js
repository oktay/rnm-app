import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import { Container, Grid, Text, useDisclosure } from "@chakra-ui/react";
import Skeletons from "./components/skeletons";
import Card from "./components/card";
import Searchbox from "./components/searchbox";
import Pagination from "./components/pagination";
import DetailModal from "./components/detail-modal";
import Hero from "./components/hero";
import Header from "./components/header";

function App() {
  const [query, setQuery] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()

  function fetcher(url) {
    setLoading(true);
    fetch(url)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("No results");
        }
        return response.json();
      })
      .then(function (data) {
        setPageData(data);
        setLoading(false);
        setError(false);
      })
      .catch(function (error) {
        setError(error.message);
      });
  }

  useEffect(() => {
    fetcher(query);
  }, [query]);

  return (
    <>
      <Header />
      <Hero />
      <Container maxWidth="960px" paddingY="64px" mt="-120px">
        <Searchbox setQuery={setQuery} />
        <Grid
          templateColumns={[
            "1fr",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap="32px"
        >
          {error ? (
            <Text
              fontSize="4xl"
              textAlign="center"
              fontWeight="semibold"
              color="gray.500"
              gridColumn={["", "span 2", "span 2", "span 4"]}
            >
              {error}
            </Text>
          ) : loading ? (
            <Skeletons />
          ) : (
            pageData?.results?.map((char) => (
              <Card key={char.id} char={char} setDetail={setDetail} onOpen={onOpen} />
            ))
          )}
        </Grid>
        {!loading && !error && (
          <>
            <Pagination info={pageData.info} setQuery={setQuery} />
            { detail && <DetailModal detail={detail} isOpen={isOpen} onOpen={onOpen} onCLose={onClose} />}
          </>
        )}
      </Container>
    </>
  );
}

export default App;
