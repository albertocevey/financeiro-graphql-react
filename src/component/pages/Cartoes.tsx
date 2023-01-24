import { Cartao, useCartoesQuery } from "../../generated";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Cartoes = () => {
  const { data, isLoading } = useCartoesQuery();

  return (
    <>
      <Link
        to={{
          pathname: "../financeiro-graphql-react/adicionarCartao/",
        }}
        relative="route"
      >
        <Button variant="contained">Adicionar Cartão</Button>
      </Link>
      {isLoading && <p>Carregando ...</p>}
      <div id="PaymentForm">
        {data &&
          data.cartoes?.map((cartao: Cartao) => (
            <ul className="nobull" key={cartao.cartaoId}>
              <li key={cartao.cartaoId}>
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

                  <br></br>
                </Link>
              </li>
            </ul>
          ))}
      </div>
    </>
  );
};

export default Cartoes;
