import {
  Cartao,
  useCartoesQuery,
  useRemoverCartaoMutation,
} from "../../generated";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Stack, Zoom } from "@mui/material";
import { CreditCard } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { string } from "zod";

const Cartoes = () => {
  const [checked, setChecked] = useState(false);
  const [messageReturn, setMessageReturn] = useState("");
  const [colorButtonReturn, setColorButtonReturn] = useState<
    "success" | "error"
  >("error");
  const [cartaoId, SetCartaoId] = useState("");
  const { data, isLoading } = useCartoesQuery();
  const { mutate, isSuccess } = useRemoverCartaoMutation({
    onSuccess: (response) => {
      if (response.removerCartao.observacao === "Cartão Removido") {
        setMessageReturn("Cartão removido com sucesso!");
        setColorButtonReturn("success");
        setChecked((prev) => !prev);
        return true;
      }
      setChecked((prev) => !prev);
      setColorButtonReturn("error");
      setMessageReturn(`${response.removerCartao.observacao}`);
      return false;
    },
  });

  const { register, handleSubmit } = useForm({});

  const onSubmit = async (data: any) => {
    mutate(data);
  };
  return (
    <>
      <Box maxWidth="700px" minWidth="650px" sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Link
              style={{ textDecoration: "none" }}
              to={{
                pathname: "../financeiro-graphql-react/adicionarCartao/",
              }}
              relative="route"
            >
              <Button
                color="info"
                endIcon={<CreditCard />}
                variant="contained"
                fullWidth
                type="submit"
                sx={{ py: "0.8rem", mt: "1rem", fontSize: "20px" }}
              >
                Cadastrar Novo Cartão
              </Button>
            </Link>
          </Grid>
          {isLoading && <p>Carregando ...</p>}

          {data &&
            data.cartoes?.map((cartao: Cartao) => (
              <Grid item xs={6}>
                <Link
                  to={{
                    pathname:
                      "../financeiro-graphql-react/detalhescartao/" +
                      `${cartao.cartaoId}`,
                  }}
                  relative="route"
                >
                  <Cards
                    key={cartao.cartaoId}
                    expiry={cartao.dataValidadeCartao}
                    name={cartao.nomeTitular}
                    number={cartao.numeroCartao}
                    cvc="111"
                  />
                </Link>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      value={cartao.cartaoId}
                      hidden
                      {...register("cartaoId", { value: cartao.cartaoId })}
                    />
                    <LoadingButton
                      loadingIndicator="Deletando Cartão"
                      color="error"
                      endIcon={<CreditCard />}
                      variant="contained"
                      type="submit"
                      loading={isLoading}
                      sx={{
                        display: "flex",
                        py: "0.8rem",
                        mt: "1rem",
                        fontSize: "20px",
                      }}
                    >
                      Deletar Cartão
                      <br />
                      {cartao.numeroCartao}
                    </LoadingButton>
                  </form>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  key={cartao.cartaoId}
                >
                  <Grid item xs={6} sx={{ display: "flex" }}>
                    <Zoom in={checked}>
                      <LoadingButton
                        color={colorButtonReturn}
                        variant="contained"
                        fullWidth
                        sx={{ py: "0.8rem", mt: "1rem" }}
                      >
                        {messageReturn}
                      </LoadingButton>
                    </Zoom>
                  </Grid>
                </Stack>
                <br />
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Cartoes;
