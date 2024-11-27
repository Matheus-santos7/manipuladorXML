import React, { useState, Dispatch, SetStateAction } from "react";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import DestinatarioColuna from "./DestinatarioColuna";
import EmitenteColuna from "./EmitenteColuna";
import SkuColuna from "./SkuColuna"; // Importe o novo componente para SKU

import { marketplaces } from "../../constants/marketplaces";
import { emitentes } from "../../constants/emitentes";

type DestinatarioType =
  | typeof marketplaces.mercadoLivre
  | typeof marketplaces.amazon
  | typeof marketplaces.magalu;

const RemessaForm: React.FC = () => {
  const [emitente, setEmitente] = useState<
    (typeof emitentes)[keyof typeof emitentes]
  >(emitentes.mamBaby); // Default
  const [produto, setProduto] = useState<{
    cProd: string;
    cEAN: string;
    xProd: string;
    NCM: string;
    CFOP: string;
    uCom: string;
    qCom: string;
    vUnCom: string;
    vProd: string;
    cEANTrib: string;
    uTrib: string;
    qTrib: string;
    vUnTrib: string;
    indTot: string;
  }>({
    cProd: "",
    cEAN: "",
    xProd: "",
    NCM: "",
    CFOP: "",
    uCom: "",
    qCom: "",
    vUnCom: "",
    vProd: "",
    cEANTrib: "",
    uTrib: "",
    qTrib: "",
    vUnTrib: "",
    indTot: "",
  }); // Default
  const [destinatario, setDestinatario] = useState<DestinatarioType>(
    marketplaces.mercadoLivre
  ); // Default

  // Estado para os SKUs
  const [skus, setSkus] = useState<{ sku: string; quantidade: number }[]>([
    { sku: "", quantidade: 1 },
  ]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Dados enviados:", { destinatario, emitente, skus });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Formulário de Remessa
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {/* Emitente */}
            <Grid item xs={12} sm={4}>
              <EmitenteColuna
                emitente={emitente}
                onChange={(novoEmitente) => setEmitente(novoEmitente)}
              />
            </Grid>

            {/* Destinatário */}
            <Grid item xs={12} sm={4}>
              <DestinatarioColuna
                destinatario={destinatario}
                onChange={(novoDestinatario) =>
                  setDestinatario(novoDestinatario)
                }
              />
            </Grid>

            {/* SKU e Quantidade */}
            <Grid item xs={12} sm={4}>
              <SkuColuna skus={skus} setSkus={setSkus} />
            </Grid>
          </Grid>

          {/* Botão de Enviar */}
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default RemessaForm;
