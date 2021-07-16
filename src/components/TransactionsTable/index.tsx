import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
          <td className="title">Aluguel Casa</td>
            <td className="withdraw">- R$1000</td>
            <td>Aluguel</td>
            <td>16/07/2021</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de Website</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>16/07/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}