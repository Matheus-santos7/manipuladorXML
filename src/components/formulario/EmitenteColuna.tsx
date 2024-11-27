import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import CampoFormulario from "./CampoForm";
import { emitentes } from "../../constants/emitentes"; // Constantes de emitente

type Emitente = typeof emitentes[keyof typeof emitentes];

interface EmitenteColunaProps {
  emitente: Emitente;
  onChange: (novoEmitente: Emitente) => void;
}

const EmitenteColuna: React.FC<EmitenteColunaProps> = ({
  emitente,
  onChange,
}) => {
  const [localEmitente, setLocalEmitente] = useState<Emitente>(emitente);

  const handleEmitenteChange = (event: SelectChangeEvent<string>) => {
    const selectedEmitente = event.target.value as keyof typeof emitentes;
    const novoEmitente = emitentes[selectedEmitente];
    setLocalEmitente(novoEmitente);
    onChange(novoEmitente);
  };

  const handleCampoChange = (campo: keyof Emitente | `enderEmit.${keyof Emitente['enderEmit']}`, value: string) => {
    setLocalEmitente((prev) => {
      // Cria uma cópia do objeto anterior (prev) para não modificar diretamente
      const updatedEmitente = { ...prev };

      if (campo.startsWith("enderEmit.")) {
        // Se o campo for um campo dentro de 'enderEmit'
        const enderEmitKey = campo.replace("enderEmit.", ""); // Extrai a chave do endereço
        updatedEmitente.enderEmit = {
          ...updatedEmitente.enderEmit,
          [enderEmitKey]: value, // Atualiza o campo dentro de 'enderEmit'
        };
      } else {
        (updatedEmitente as any)[campo] = value;
      }

      return updatedEmitente;
    });
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Emitente
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Emitente</InputLabel>
        <Select
          value={
            Object.keys(emitentes).find(
              (key) => emitentes[key as keyof typeof emitentes] === localEmitente
            ) || ""
          }
          onChange={handleEmitenteChange}
        >
          {Object.keys(emitentes).map((key) => (
            <MenuItem key={key} value={key}>
              {emitentes[key as keyof typeof emitentes].xNome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="CNPJ"
            value={localEmitente.CNPJ}
            onChange={(e) => handleCampoChange("CNPJ", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Nome"
            value={localEmitente.xNome}
            onChange={(e) => handleCampoChange("xNome", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <CampoFormulario
            label="Endereço"
            value={localEmitente.enderEmit.xLgr}
            onChange={(e) => handleCampoChange("enderEmit.xLgr", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Número"
            value={localEmitente.enderEmit.nro}
            onChange={(e) => handleCampoChange("enderEmit.nro", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Bairro"
            value={localEmitente.enderEmit.xBairro}
            onChange={(e) => handleCampoChange("enderEmit.xBairro", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Código do Município"
            value={localEmitente.enderEmit.cMun}
            onChange={(e) => handleCampoChange("enderEmit.cMun", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Município"
            value={localEmitente.enderEmit.xMun}
            onChange={(e) => handleCampoChange("enderEmit.xMun", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="UF"
            value={localEmitente.enderEmit.UF}
            onChange={(e) => handleCampoChange("enderEmit.UF", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="CEP"
            value={localEmitente.enderEmit.CEP}
            onChange={(e) => handleCampoChange("enderEmit.CEP", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Código do País"
            value={localEmitente.enderEmit.cPais}
            onChange={(e) => handleCampoChange("enderEmit.cPais", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="IE"
            value={localEmitente.IE}
            onChange={(e) => handleCampoChange("IE", e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmitenteColuna;
