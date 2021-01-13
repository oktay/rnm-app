import fetch from "isomorphic-fetch";
import { useState, useEffect, useRef } from "react";
import { Container, Grid, Text, useDisclosure } from "@chakra-ui/react";
import Skeletons from "./components/skeletons";
import Card from "./components/card";
import Searchbox from "./components/searchbox";
import Pagination from "./components/pagination";
import DetailModal from "./components/detail-modal";
import Hero from "./components/hero";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const [query, setQuery] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [pageData, setPageData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detail, setDetail] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const content = useRef();

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
    content.current.scrollIntoView();
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 1);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Container maxWidth="1140px" paddingY="64px" mt="-120px" ref={content}>
        <Searchbox setQuery={setQuery} />
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap="32px"
        >
          {error ? (
            <Text
              fontSize="4xl"
              textAlign="center"
              fontWeight="medium"
              color="gray.500"
              gridColumn={{ md: "span 2", xl: "span 4" }}
            >
              {error}
            </Text>
          ) : loading ? (
            <Skeletons />
          ) : (
            pageData?.results?.map((char) => (
              <Card
                key={char.id}
                char={char}
                setDetail={setDetail}
                onOpen={onOpen}
              />
            ))
          )}
        </Grid>
        {!loading && !error && (
          <>
            <Pagination info={pageData.info} setQuery={setQuery} />
            {detail && (
              <DetailModal
                detail={detail}
                isOpen={isOpen}
                onOpen={onOpen}
                onCLose={onClose}
              />
            )}
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default App;
