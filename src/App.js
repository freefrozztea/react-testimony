import Testimony from './components/Testimony';
import logo from './logo.svg';
import './App.css';
import users from './data/users';

function App() {
  return (
    <div className="App">
      <main className='principal-container'>
        <h1>Our graduates say</h1>
        {users.map(user => <Testimony 
                            name={user.name} 
                            src={user.img}
                            country={user.country}
                            occupation={user.occupation}
                            company={user.company}
                            testimony={user.testimony}
                            key={user.id}/>)}
      </main>
    </div>
  );
}

export default App;
