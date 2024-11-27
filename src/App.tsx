import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import RemessaForm from "./components/formulario/RemessaForm"; // Importe o formulário de Remessa

const App: React.FC = () => {
  const [formType, setFormType] = useState<string>(""); // Estado para controlar a opção selecionada

  // Função para mudar a seleção do formulário
  const handleChange = (event: SelectChangeEvent<string>) => {
    setFormType(event.target.value as string); // Atualiza a seleção com base no valor
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          {/* Título da aplicação */}
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Escolha o Tipo de XML
          </Typography>

          {/* Seletor para escolher o tipo de formulário */}
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="formType-label">Tipo de Formulário</InputLabel>
            <Select
              labelId="formType-label"
              id="formType"
              value={formType}
              onChange={handleChange}
              label="Tipo de Formulário"
            >
              <MenuItem value="">
                <em>Selecione</em>
              </MenuItem>
              <MenuItem value="remessa">Remessa</MenuItem>
              <MenuItem value="outraOpção">Outra Opção</MenuItem>
            </Select>
          </FormControl>

          {/* Condicional para renderizar o formulário de Remessa */}
          {formType === "remessa" && <RemessaForm />}
        </Box>
      </Container>
    </>
  );
};

export default App;
