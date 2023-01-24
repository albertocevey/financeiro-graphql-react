import { useEffect, useState } from "react";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Grid, styled, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import { literal, object, string, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
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

const registerSchema = object({
  numeroCartao: string()
    .nonempty("Name is required")
    .max(32, "Name must be less than 100 characters"),
  nomeTitular: string().nonempty("Email is required").email("Email is invalid"),
  data: string()
    .nonempty("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().nonempty("Please confirm your password"),
  terms: literal(true, {
    invalid_type_error: "Accept Terms is required",
  }),
}).refine((data: any) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

type RegisterInput = TypeOf<typeof registerSchema>;

const AdicionarCartao = () => {
  const [numeroCartao, SetNumeroCartao] = useState("");
  const [nomeTitular, SetNomeTitular] = useState("");
  const [dataValidadeCartao, SetDataValidadeCartao] = useState("");
  const [focus, SetFocus] = useState();

  const [loading, setLoading] = useState(false);

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
  };
  console.log(errors);

  return (
    <>
      <FormProvider {...methods}>
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
                required
                helperText="Preenchimento Obrigatorio"
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
      </FormProvider>
    </>
  );
};
export default AdicionarCartao;
