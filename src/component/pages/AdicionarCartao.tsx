import { useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Grid, styled, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CreditCard from "@mui/icons-material/CreditCard";
import { useForm } from "react-hook-form";
import { useCadastrarCartaoMutation } from "../../generated";
import { LoadingButton } from "@mui/lab";

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
  const [display, setDisplay] = useState("none");
  const [messageReturn, setMessageReturn] = useState("");
  const [colorButtonReturn, setColorButtonReturn] = useState<
    "success" | "error"
  >("error");
  const { mutate, isSuccess, isLoading } = useCadastrarCartaoMutation({
    onSuccess: (response) => {
      console.log(response.cadastrarCartao);
      if (response.cadastrarCartao.cartaoId == "0") {
        setDisplay("");
        setColorButtonReturn("error");
        setMessageReturn(`${response.cadastrarCartao.observacao}`);
        return false;
      }
      setMessageReturn("Cartão adicionado com sucesso!");
      setColorButtonReturn("success");
      setDisplay("");
    },
  });

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
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          maxWidth="800px"
          minWidth="650px"
          itemType="form"
          sx={{ flexGrow: 1 }}
        >
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
              <LoadingButton
                loadingIndicator="Salvando Cartão"
                color="secondary"
                endIcon={<CreditCard />}
                variant="contained"
                fullWidth
                type="submit"
                loading={isLoading}
                sx={{ py: "0.8rem", mt: "1rem", fontSize: "20px" }}
              >
                Cadastrar Cartão
              </LoadingButton>
            </Grid>
            <Grid item xs={12} sx={{ display: `${display}` }}>
              <LoadingButton
                color={colorButtonReturn}
                variant="contained"
                fullWidth
                sx={{ py: "0.8rem", mt: "1rem" }}
              >
                {messageReturn}
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};
export default AdicionarCartao;
