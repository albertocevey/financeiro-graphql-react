import { useCartoesQuery } from "../../generated";

const Cartao = () => {
  
    const { data, isLoading } = useCartoesQuery()
    
    return (
      <div>
        {isLoading && <p>Carregando...</p>}
        <h1>Lista de cartões</h1>
        <ul>
          {data && data.cartoes?.map((cartao: any) => (            
            <li key={cartao.cartaoId}>Nome do titular: {cartao.nomeTitular}<br></br>
            Numero do cartão: {cartao.numeroCartao} </li>
          ))}
        </ul>
        <br></br>
      </div>
    )
}

export default Cartao