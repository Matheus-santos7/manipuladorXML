import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";

interface Sku {
  sku: string;
  quantidade: number;
}

interface SkuColunaProps {
  skus: Sku[];
  setSkus: React.Dispatch<React.SetStateAction<Sku[]>>;
}

const SkuColuna: React.FC<SkuColunaProps> = ({ skus, setSkus }) => {
  const handleSkuChange = (index: number, field: "sku" | "quantidade", value: string | number) => {
    const updatedSkus = [...skus];
    updatedSkus[index] = { ...updatedSkus[index], [field]: value };
    setSkus(updatedSkus);
  };

  const handleAddSku = () => {
    setSkus([...skus, { sku: "", quantidade: 1 }]);
  };

  const handleRemoveSku = (index: number) => {
    const updatedSkus = skus.filter((_, i) => i !== index);
    setSkus(updatedSkus);
  };

  return (
    <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        SKUs e Quantidades
      </Typography>

      {skus.map((skuItem, index) => (
        <Grid container spacing={3} key={index}>
          <Grid item xs={12} sm={5}>
            <TextField
              label={`SKU ${index + 1}`}
              variant="outlined"
              fullWidth
              value={skuItem.sku}
              onChange={(e) => handleSkuChange(index, "sku", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Quantidade"
              variant="outlined"
              type="number"
              fullWidth
              value={skuItem.quantidade}
              onChange={(e) => handleSkuChange(index, "quantidade", Number(e.target.value))}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => handleRemoveSku(index)}
              disabled={skus.length === 1}
            >
              Remover
            </Button>
          </Grid>
        </Grid>
      ))}

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddSku}
        sx={{ mt: 2 }}
      >
        Adicionar SKU
      </Button>
    </Box>
  );
};

export default SkuColuna;
