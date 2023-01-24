import { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Grid, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import CreditCard from "@mui/icons-material/CreditCard";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "green",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const AdicionarCartao = () => {
  const [numeroCartao, SetNumeroCartao] = useState("");
  const [nomeTitular, SetNomeTitular] = useState("");
  const [dataValidadeCartao, SetDataValidadeCartao] = useState("");
  const [focus, SetFocus] = useState();

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Cards
              number={numeroCartao}
              name={nomeTitular}
              expiry={dataValidadeCartao}
              cvc="111"
              focused={focus}
            />
          </Grid>
          <Grid item xs={3}>
            <CssTextField
              id="outlined-input"
              label="Numero do Cartão"
              helperText="Preenchimento Obrigatorio"
              required
              onChange={(e) => {
                SetNumeroCartao(e.target.value);
              }}
              onFocus={(e: any) => SetFocus(e.target.name)}
            />
            <br />
            <CssTextField
              id="outlined-basic"
              label="Nome do Titular"
              variant="outlined"
              required
              helperText="Preenchimento Obrigatorio"
              onChange={(e) => {
                SetNomeTitular(e.target.value);
              }}
              onFocus={(e: any) => SetFocus(e.target.name)}
            />
            <br />
            <CssTextField
              id="outlined-basic"
              label="Data de Validade do Cartão"
              variant="outlined"
              required
              helperText="Preenchimento Obrigatorio"
              onChange={(e) => {
                SetDataValidadeCartao(e.target.value);
              }}
              onFocus={(e: any) => SetFocus(e.target.name)}
            />
          </Grid>
          <br />
          <Grid item xs={3}>
            <CssTextField
              id="outlined-basic"
              label="Dia do Vencimento da fatura"
              variant="outlined"
              required
              helperText="Preenchimento Obrigatorio"
            />
            <br />
            <CssTextField
              id="outlined-basic"
              label="Dia do Vencimento da fatura"
              variant="outlined"
              required
              helperText="Preenchimento Obrigatorio"
            />
            <br />
            <CssTextField
              id="outlined-basic"
              label="Observações"
              variant="outlined"
            />
          </Grid>
          <br />

          <Grid item xs={12}>
            <LoadingButton
              color="success"
              endIcon={<CreditCard />}
              variant="contained"
              fullWidth
              type="submit"
              loading={loading}
              sx={{ py: "0.8rem", mt: "1rem" }}
            >
              Cadastrar Cartão
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default AdicionarCartao;
