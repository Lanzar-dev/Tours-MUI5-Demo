import {
  BottomNavigation,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import CustomizedAccordions from "../components/Accordion";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

export default function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="body1" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          temporibus repellat sint expedita soluta illo dignissimos dolores ea
          amet animi perspiciatis explicabo vel, nostrum error incidunt
          asperiores iure sit nemo quisquam facilis beatae veritatis debitis
          velit nobis! Dolores, in culpa.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
