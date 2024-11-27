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
import { marketplaces } from "../../constants/marketplaces"; // Constantes de marketplaces

interface DestinatarioColunaProps {
  destinatario: typeof marketplaces[keyof typeof marketplaces];
  onChange: (novoDestinatario: typeof marketplaces[keyof typeof marketplaces]) => void;
}

const DestinatarioColuna: React.FC<DestinatarioColunaProps> = ({
  destinatario,
  onChange,
}) => {
  const [localDestinatario, setLocalDestinatario] = useState(destinatario);

  const handleMarketplaceChange = (event: SelectChangeEvent<string>) => {
    const selectedMarketplace = event.target.value as keyof typeof marketplaces;
    const novoDestinatario = marketplaces[selectedMarketplace];
    setLocalDestinatario(novoDestinatario);
    onChange(novoDestinatario);
  };

  const handleCampoChange = (
    campo: string,
    value: string
  ) => {
    setLocalDestinatario((prev) => ({
      ...prev,
      [campo]: value
    }));
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Destinatário
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Marketplace</InputLabel>
        <Select
          value={
            Object.keys(marketplaces).find(
              (key) => marketplaces[key as keyof typeof marketplaces] === localDestinatario
            ) || ""
          }
          onChange={handleMarketplaceChange}
        >
          {Object.keys(marketplaces).map((key) => (
            <MenuItem key={key} value={key}>
              {marketplaces[key as keyof typeof marketplaces].xNome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="CNPJ"
            value={localDestinatario.CNPJ}
            onChange={(e) => handleCampoChange("CNPJ", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Nome"
            value={localDestinatario.xNome}
            onChange={(e) => handleCampoChange("xNome", e.target.value)}
          />
        </Grid>
        <Grid item xs={9}>
          <CampoFormulario
            label="Endereço"
            value={localDestinatario.xLgr}
            onChange={(e) => handleCampoChange("xLgr", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <CampoFormulario
            label="Número"
            value={localDestinatario.nro}
            onChange={(e) => handleCampoChange("nro", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Complemento"
            value={localDestinatario.xCpl}
            onChange={(e) => handleCampoChange("xCpl", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Bairro"
            value={localDestinatario.xBairro}
            onChange={(e) => handleCampoChange("xBairro", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Código do Município"
            value={localDestinatario.cMun}
            onChange={(e) => handleCampoChange("cMun", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Município"
            value={localDestinatario.xMun}
            onChange={(e) => handleCampoChange("xMun", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="UF"
            value={localDestinatario.UF}
            onChange={(e) => handleCampoChange("UF", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="CEP"
            value={localDestinatario.CEP}
            onChange={(e) => handleCampoChange("CEP", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="Código do País"
            value={localDestinatario.cPais}
            onChange={(e) => handleCampoChange("cPais", e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CampoFormulario
            label="IE"
            value={localDestinatario.IE}
            onChange={(e) => handleCampoChange("IE", e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DestinatarioColuna;
