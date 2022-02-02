import { Container, TextField, Typography, Box, Button } from "@mui/material";
import React from "react";

function FormularioIncial() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Container maxWidth="md">
        <Typography align="center" maxWidth variant="h3" component="h1">
          Brazil News
        </Typography>
        <form>
          <TextField
            margin="normal"
            fullWidth
            variant="standard"
            placeholder="Digite a palavra que deseja buscar"
          />
          <Box margin={5} textAlign="center">
            <Button type="submit"  variant="outlined">
              Buscar
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default FormularioIncial;
