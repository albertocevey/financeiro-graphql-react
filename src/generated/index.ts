import {
  useMutation,
  useQuery,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(
      "https://financeiro-graphql-nestjs-production.up.railway.app/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      }
    );

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AtualizarBoletoInput = {
  boletoId: Scalars["String"];
  /** Data vencimento do boleto */
  dataVencimento?: InputMaybe<Scalars["DateTime"]>;
  /** Nome do boleto */
  nomeBoleto?: InputMaybe<Scalars["String"]>;
  /** Observações do boleto */
  observacao?: InputMaybe<Scalars["String"]>;
  /** Valor do boleto */
  valor?: InputMaybe<Scalars["Float"]>;
};

export type AtualizarCartaoInput = {
  cartaoId: Scalars["String"];
  /** Validade do cartão (MM/AA) */
  dataValidadeCartao?: InputMaybe<Scalars["String"]>;
  /** Data vencimento da fatura */
  dataVencimentoFatura?: InputMaybe<Scalars["String"]>;
  /** Nome do Titular */
  nomeTitular?: InputMaybe<Scalars["String"]>;
  /** Numero do cartão */
  numeroCartao?: InputMaybe<Scalars["String"]>;
  /** Comentario sobre o cartão */
  observacao?: InputMaybe<Scalars["String"]>;
};

export type AtualizarCompraCartaoInput = {
  compraId: Scalars["String"];
  /** Data da compra */
  dataCompra?: InputMaybe<Scalars["DateTime"]>;
  /** Nome da Compra */
  nomeCompra?: InputMaybe<Scalars["String"]>;
  /** Numero do cartão */
  numeroCartao?: InputMaybe<Scalars["String"]>;
  /** Comentario da compra */
  observacao?: InputMaybe<Scalars["String"]>;
  /** Numero de parcelas da compra */
  quantidadeParcelas?: InputMaybe<Scalars["Float"]>;
  /** Valor da compra */
  valorCompra?: InputMaybe<Scalars["Float"]>;
};

export type Boleto = {
  __typename?: "Boleto";
  /** id do boleto */
  boletoId: Scalars["String"];
  /** Data de vencimento do boleto */
  dataVencimento: Scalars["DateTime"];
  /** Nome Boleto */
  nomeBoleto: Scalars["String"];
  /** Comentario sobre o boleto */
  observacao: Scalars["String"];
  /** Valor do Boleto */
  valor: Scalars["Float"];
};

export type CadastrarBoletoInput = {
  /** Data vencimento do boleto */
  dataVencimento: Scalars["DateTime"];
  /** Nome do boleto */
  nomeBoleto: Scalars["String"];
  /** Observações do boleto */
  observacao: Scalars["String"];
  /** Valor do boleto */
  valor: Scalars["Float"];
};

export type CadastrarCartaoInput = {
  /** Validade do cartão (MM/AA) */
  dataValidadeCartao: Scalars["String"];
  /** Data vencimento da fatura */
  dataVencimentoFatura: Scalars["String"];
  /** Nome do Titular */
  nomeTitular: Scalars["String"];
  /** Numero do cartão */
  numeroCartao: Scalars["String"];
  /** Comentario sobre o cartão */
  observacao?: InputMaybe<Scalars["String"]>;
};

export type CadastrarCompraCartaoInput = {
  /** Data da compra */
  dataCompra: Scalars["DateTime"];
  /** Nome da Compra */
  nomeCompra: Scalars["String"];
  /** Numero do cartão */
  numeroCartao: Scalars["String"];
  /** Comentario da compra */
  observacao?: InputMaybe<Scalars["String"]>;
  /** Numero de parcelas da compra */
  quantidadeParcelas: Scalars["Float"];
  /** Valor da compra */
  valorCompra: Scalars["Float"];
};

export type Cartao = {
  __typename?: "Cartao";
  /** id do cartao */
  cartaoId: Scalars["String"];
  /** Validade do cartão (MM/AA) */
  dataValidadeCartao: Scalars["String"];
  /** Data de vencimento da fatura */
  dataVencimentoFatura: Scalars["String"];
  /** Nome Titular Cartão */
  nomeTitular: Scalars["String"];
  /** Numero do cartão */
  numeroCartao: Scalars["String"];
  /** Comentarios sobre o cartão */
  observacao?: Maybe<Scalars["String"]>;
};

export type CompraCartao = {
  __typename?: "CompraCartao";
  /** id da compra */
  compraId: Scalars["String"];
  /** Data da compra */
  dataCompra: Scalars["DateTime"];
  /** Nome da compra */
  nomeCompra: Scalars["String"];
  /** Numero do cartão */
  numeroCartao: Scalars["String"];
  /** Comentarios sobre a compra */
  observacao?: Maybe<Scalars["String"]>;
  /** Quantidade de parcelas da compra */
  quantidadeParcelas: Scalars["Float"];
  /** Valor da compra */
  valorCompra: Scalars["Float"];
};

export type Contas = {
  __typename?: "Contas";
  /** id do tipo conta */
  contaTipoId: Scalars["String"];
  /** Nome da Conta */
  nomeConta: Scalars["String"];
  /** Comentario sobre a conta */
  observacao: Scalars["String"];
  /** Tipo de conta */
  tipoConta: Scalars["String"];
  /** Valor da Conta */
  valor: Scalars["Float"];
};

export type CreateUserInput = {
  /** email of the user */
  email: Scalars["String"];
  /** first name of the user */
  firstName: Scalars["String"];
  /** last name of the user */
  lastName: Scalars["String"];
  /** role of the user */
  role: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  atualizarBoleto: Boleto;
  atualizarCartao: Cartao;
  atualizarCompraCartao: CompraCartao;
  cadastrarBoleto: Boleto;
  cadastrarCartao: Cartao;
  cadastrarCompraCartao: CompraCartao;
  createUser: User;
  removeUser: Contas;
  removerBoleto: Boleto;
  removerCartao: Cartao;
  removerCompraCartao: CompraCartao;
  updateUser: Contas;
};

export type MutationAtualizarBoletoArgs = {
  atualizarBoletoInput: AtualizarBoletoInput;
};

export type MutationAtualizarCartaoArgs = {
  atualizarCartaoInput: AtualizarCartaoInput;
};

export type MutationAtualizarCompraCartaoArgs = {
  atualizarCompraCartaoInput: AtualizarCompraCartaoInput;
};

export type MutationCadastrarBoletoArgs = {
  cadastrarBoletoInput: CadastrarBoletoInput;
};

export type MutationCadastrarCartaoArgs = {
  cadastrarCartaoInput: CadastrarCartaoInput;
};

export type MutationCadastrarCompraCartaoArgs = {
  cadastrarCompraCartaoInput: CadastrarCompraCartaoInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationRemoveUserArgs = {
  userId: Scalars["String"];
};

export type MutationRemoverBoletoArgs = {
  boletoId: Scalars["String"];
};

export type MutationRemoverCartaoArgs = {
  cartaoId: Scalars["String"];
};

export type MutationRemoverCompraCartaoArgs = {
  compraId: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateContasInput;
};

export type Query = {
  __typename?: "Query";
  boleto: Boleto;
  boletos: Array<Boleto>;
  cartao: Cartao;
  cartoes: Array<Cartao>;
  compra: CompraCartao;
  compras: Array<CompraCartao>;
  conta: Contas;
  contas: Array<Contas>;
  user: User;
  users: Array<User>;
};

export type QueryBoletoArgs = {
  boletoId: Scalars["String"];
};

export type QueryCartaoArgs = {
  cartaoId: Scalars["String"];
};

export type QueryCompraArgs = {
  cadastrarCompraCartaoInput: Scalars["String"];
};

export type QueryContaArgs = {
  userId: Scalars["String"];
};

export type QueryUserArgs = {
  userId: Scalars["String"];
};

export enum TipoContas {
  Boleto = "Boleto",
  CartaoCredito = "CartaoCredito",
}

export type UpdateContasInput = {
  contaTipoId: Scalars["String"];
  /** Nome da Conta */
  nomeConta?: InputMaybe<Scalars["String"]>;
  /** Comentario sobre a conta */
  observacao?: InputMaybe<Scalars["String"]>;
  /** Tipo de conta */
  tipoConta?: InputMaybe<TipoContas>;
  /** Valor da Conta */
  valor?: InputMaybe<Scalars["Float"]>;
};

export type User = {
  __typename?: "User";
  /** email of the user */
  email: Scalars["String"];
  /** first name of the user */
  firstName: Scalars["String"];
  /** last name of the user */
  lastName: Scalars["String"];
  /** role of the user */
  role: Scalars["String"];
  /** id of the user */
  userId: Scalars["String"];
};

export type CadastrarCartaoMutationVariables = Exact<{
  nomeTitular: Scalars["String"];
  numeroCartao: Scalars["String"];
  dataValidadeCartao: Scalars["String"];
  dataVencimentoFatura: Scalars["String"];
  observacao?: InputMaybe<Scalars["String"]>;
}>;

export type CadastrarCartaoMutation = {
  __typename?: "Mutation";
  cadastrarCartao: {
    __typename?: "Cartao";
    cartaoId: string;
    nomeTitular: string;
    numeroCartao: string;
    dataValidadeCartao: string;
    dataVencimentoFatura: string;
    observacao?: string | null;
  };
};

export type CartaoQueryVariables = Exact<{
  cartaoId: Scalars["String"];
}>;

export type CartaoQuery = {
  __typename?: "Query";
  cartao: {
    __typename?: "Cartao";
    cartaoId: string;
    nomeTitular: string;
    numeroCartao: string;
    dataValidadeCartao: string;
    dataVencimentoFatura: string;
    observacao?: string | null;
  };
};

export type CartoesQueryVariables = Exact<{ [key: string]: never }>;

export type CartoesQuery = {
  __typename?: "Query";
  cartoes: Array<{
    __typename?: "Cartao";
    cartaoId: string;
    numeroCartao: string;
    nomeTitular: string;
    dataValidadeCartao: string;
    dataVencimentoFatura: string;
    observacao?: string | null;
  }>;
};

export const CadastrarCartaoDocument = `
    mutation CadastrarCartao($nomeTitular: String!, $numeroCartao: String!, $dataValidadeCartao: String!, $dataVencimentoFatura: String!, $observacao: String) {
  cadastrarCartao(
    cadastrarCartaoInput: {nomeTitular: $nomeTitular, numeroCartao: $numeroCartao, dataValidadeCartao: $dataValidadeCartao, dataVencimentoFatura: $dataVencimentoFatura, observacao: $observacao}
  ) {
    cartaoId
    nomeTitular
    numeroCartao
    dataValidadeCartao
    dataVencimentoFatura
    observacao
  }
}
    `;
export const useCadastrarCartaoMutation = <
  TError = unknown,
  TContext = unknown
>(
  options?: UseMutationOptions<
    CadastrarCartaoMutation,
    TError,
    CadastrarCartaoMutationVariables,
    TContext
  >
) =>
  useMutation<
    CadastrarCartaoMutation,
    TError,
    CadastrarCartaoMutationVariables,
    TContext
  >(
    ["CadastrarCartao"],
    (variables?: CadastrarCartaoMutationVariables) =>
      fetcher<CadastrarCartaoMutation, CadastrarCartaoMutationVariables>(
        CadastrarCartaoDocument,
        variables
      )(),
    options
  );
export const CartaoDocument = `
    query Cartao($cartaoId: String!) {
  cartao(cartaoId: $cartaoId) {
    cartaoId
    nomeTitular
    numeroCartao
    dataValidadeCartao
    dataVencimentoFatura
    observacao
  }
}
    `;
export const useCartaoQuery = <TData = CartaoQuery, TError = unknown>(
  variables: CartaoQueryVariables,
  options?: UseQueryOptions<CartaoQuery, TError, TData>
) =>
  useQuery<CartaoQuery, TError, TData>(
    ["Cartao", variables],
    fetcher<CartaoQuery, CartaoQueryVariables>(CartaoDocument, variables),
    options
  );
export const CartoesDocument = `
    query Cartoes {
  cartoes {
    cartaoId
    numeroCartao
    nomeTitular
    dataValidadeCartao
    dataVencimentoFatura
    observacao
  }
}
    `;
export const useCartoesQuery = <TData = CartoesQuery, TError = unknown>(
  variables?: CartoesQueryVariables,
  options?: UseQueryOptions<CartoesQuery, TError, TData>
) =>
  useQuery<CartoesQuery, TError, TData>(
    variables === undefined ? ["Cartoes"] : ["Cartoes", variables],
    fetcher<CartoesQuery, CartoesQueryVariables>(CartoesDocument, variables),
    options
  );
