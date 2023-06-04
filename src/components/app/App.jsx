import userData from 'data/user.json';
import statsData from 'data/data.json';
import Profile from 'components/profile';
import Statistics from 'components/statistics';
import css from './app.module.css';


const App = () => {
  return (
    <div className={css.wrapper}>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statsData}/>
    </div>
  )
};

export default App;
