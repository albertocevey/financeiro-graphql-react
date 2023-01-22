import { styled } from "@mui/material/styles";
import { Box, Grid, Paper } from "@mui/material";
import { Cartao, useCartoesQuery } from "../../generated";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";

const Cartoes = () => {
  const { data, isLoading } = useCartoesQuery();

  return (
    <>
      {isLoading && <p>Carregando ...</p>}
      <div id="PaymentForm">
        {data &&
          data.cartoes?.map((cartao: Cartao) => (
            <Link
              to={{
                pathname: "../detalhescartao/" + `${cartao.cartaoId}`,
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

              <br></br>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Cartoes;
