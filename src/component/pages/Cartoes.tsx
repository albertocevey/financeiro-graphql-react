import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from "@mui/material";
import { Cartao, useCartoesQuery } from "../../generated";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Cartoes = () => {
  
    const { data, isLoading } = useCartoesQuery()
    
    return (
      <div id="PaymentForm">
            {data && data.cartoes?.map((cartao: Cartao) => (
            <>
              <Grid xs={12}>
                  <Cards
                    expiry={cartao.dataValidadeCartao}
                    name={cartao.nomeTitular}
                    number={cartao.numeroCartao}
                    cvc="111"
                    />
              </Grid>
              <br></br>
            </>  
            ))} 
      </div>      
    )
}

export default Cartoes