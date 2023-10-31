import Transaction from 'components/Transaction/Transaction';
import { Table, Thead } from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        {items.map((item, index) => (
          <Transaction key={item.id} items={item} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
