import userData from 'data/user.json'
import Profile from 'components/profile';


const App = () => {
  return (
    <div>
      <Profile {...userData}/>
    </div>
  )
};


export default App;
