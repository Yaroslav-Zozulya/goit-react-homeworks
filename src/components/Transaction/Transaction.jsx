import { Cell, Row } from './Transaction.styled';

const Transaction = ({ items: { type, amount, currency }, index }) => {
  return (
    <Row index={index}>
      <Cell>{type}</Cell>
      <Cell>{amount}</Cell>
      <Cell>{currency}</Cell>
    </Row>
  );
};

export default Transaction;
