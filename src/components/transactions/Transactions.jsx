import PropTypes from 'prop-types';

import css from './transactions.module.css';

const Transactions = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th >Type</th>
          <th >Amount</th>
          <th >Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td >{type}</td>
              <td >{amount}</td>
              <td >{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }
  ))

}

export default Transactions;
