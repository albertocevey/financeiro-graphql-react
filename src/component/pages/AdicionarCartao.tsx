import { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button, Grid, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CreditCard from "@mui/icons-material/CreditCard";
import { useForm } from "react-hook-form";
import { useCadastrarCartaoMutation } from "../../generated";

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
  const { mutate, isLoading, isSuccess } = useCadastrarCartaoMutation();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      cartaoId: "",
      numeroCartao: "",
      nomeTitular: "",
      dataValidadeCartao: "",
      dataVencimentoFatura: "",
      observacao: "",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box itemType="form" sx={{ flexGrow: 1 }}>
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
            {/* <FormProvider {...methods}> */}

            <Grid item xs={3}>
              <CssTextField
                id="outlined-input"
                label="Numero do Cartão"
                helperText="Preenchimento Obrigatorio"
                type="input"
                required
                onFocus={(e: any) => SetFocus(e.target.name)}
                {...register("numeroCartao", {
                  onChange: (e: any) => {
                    SetNumeroCartao(e.target.value);
                  },
                })}
              />
              <br />
              <CssTextField
                id="outlined-basic"
                label="Nome do Titular"
                variant="outlined"
                type="input"
                required
                helperText="Preenchimento Obrigatorio"
                onFocus={(e: any) => SetFocus(e.target.name)}
                {...register("nomeTitular", {
                  onChange: (e: any) => {
                    SetNomeTitular(e.target.value);
                  },
                })}
              />
              <br />
              <CssTextField
                id="outlined-basic"
                label="Data de Validade do Cartão"
                variant="outlined"
                type="input"
                required
                helperText="Preenchimento Obrigatorio"
                onFocus={(e: any) => SetFocus(e.target.name)}
                {...register("dataValidadeCartao", {
                  onChange: (e: any) => {
                    SetDataValidadeCartao(e.target.value);
                  },
                })}
              />
            </Grid>
            <br />
            <Grid item xs={3}>
              <CssTextField
                id="outlined-basic"
                label="Dia do Vencimento da fatura"
                variant="outlined"
                type="input"
                required
                helperText="Preenchimento Obrigatorio"
                {...register("dataVencimentoFatura")}
              />
              <br />
              <br />
              <CssTextField
                id="outlined-basic"
                label="Observações"
                variant="outlined"
                type="input"
                {...register("observacao")}
              />
            </Grid>
            <br />

            <Grid item xs={12}>
              <Button
                color="success"
                endIcon={<CreditCard />}
                variant="contained"
                fullWidth
                type="submit"
                sx={{ py: "0.8rem", mt: "1rem" }}
              >
                Cadastrar Cartão
              </Button>
            </Grid>

            {/* </FormProvider> */}
          </Grid>
        </Box>
      </form>
    </>
  );
};
export default AdicionarCartao;
