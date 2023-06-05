import userData from 'data/user.json';
import statsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

import Profile from 'components/profile';
import Statistics from 'components/statistics';
import FriendList from 'components/friendList';
import Transactions from 'components/transactions';

import css from './app.module.css';


const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <Transactions transactions={transactionsData} />
    </div>
  )
};

export default App;
