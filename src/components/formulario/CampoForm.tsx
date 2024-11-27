import React from "react";
import { TextField } from "@mui/material";

interface CampoFormularioProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  disabled?: boolean; // Adicione esta linha
}


const CampoFormulario: React.FC<CampoFormularioProps> = ({ 
  label, 
  value, 
  onChange, 
  fullWidth = true, 
  disabled = false // Valor padrão
}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      disabled={disabled} // Adicione aqui
      sx={{ mb: 2 }}
    />
  );
};


export default CampoFormulario;
