import { Grid } from "@mui/material";
import { useCartaoQuery } from "../../generated";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useLocation, useParams } from "react-router-dom";

const DetalhesCartao = () => {
  const params = useParams();

  const { data, isLoading } = useCartaoQuery({ cartaoId: params.cartaoId! });

  return (
    <>
      <div id="PaymentForm">
        {isLoading && <p>Loading ...</p>}
        {data && (
          <Cards
            expiry={data.cartao.dataValidadeCartao}
            name={data.cartao.nomeTitular}
            number={data.cartao.numeroCartao}
            cvc="111"
          />
        )}
        <br></br>
      </div>
    </>
  );
};

export default DetalhesCartao;
