import { Button, Container, CopyButton, Text } from "@mantine/core";
import { QRCodeSVG } from "qrcode.react"; // <-- Import QR Code component
import Service from "../utils/http";

const obj = new Service();

export default function UrlResponse(props) {
  const surl = obj.getBaseURL() + "/api/s/" + props?.response?.shortCode;

  return (
    <div>
      <Container size="xs" my={40} style={{ textAlign: "center" }}>
        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "black", to: "grape", deg: 360 }}
        >
          Shortened URL:
        </Text>

        <Container bg={"blue.0"} p={10} mt={20} radius="md">
          <Text size="md" radius="lg">
            {surl}
          </Text>
        </Container>
            {/* QR Code rendering */}
        {surl && (
          <Container mt={30}>
            <Text mt="md" mb={10} fw={700}>
              QR Code:
            </Text>
            <QRCodeSVG
              value={surl}
              size={200}
              imageSettings={{
                excavate: true,
                src: "/HomeBackground.png",
                height: 50,
                width: 50,
              }}
            />
          </Container>
        )}
        <CopyButton mt="md" value={surl}>
          {({ copied, copy }) => (
            <Button color={copied ? "teal" : "blue"} onClick={copy} mt="md">
              {copied ? "Copied URL" : "Copy URL"}
            </Button>
          )}
        </CopyButton>

    
      </Container>
    </div>
  );
}
