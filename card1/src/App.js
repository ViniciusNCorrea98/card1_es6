import './App.css';
import closeItem from './assets/877932.png';
import cookie from './assets/cookie.png';

function App() {
  return (
    <div className="card">
      <img src ={closeItem} alt="closeItem" className='iconClose'/>
      <img src ={cookie} alt="cookie" className='cookie'/>
      <span>Nós utilizamos cookies para melhorar 
        <br/> nossa UX, analytics e marketing.
      </span>
      <button>Tudo bem!</button>
    </div>
  );
}

export default App;
