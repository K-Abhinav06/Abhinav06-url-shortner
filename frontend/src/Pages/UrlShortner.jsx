import React, { useState } from "react";
import UrlForm from "./UrlForm";
import UrlResponse from "./UrlResponse";
import { Container } from "@mantine/core";

export default function UrlShortner() {
  const [response, setResponse] = useState(null);

  return (
    <Container size="md" my="60" align="center">
      {response ? (
        <UrlResponse setResponse={setResponse} response={response} />
      ) : (
        <UrlForm setResponse={setResponse} />
      )}
    </Container>
  );
}
