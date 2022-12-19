import './App.css';
import { Helmet } from 'react-helmet';

function App() {

  const TITLE = 'Ahmet ÇAKIR';

  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <header className="App-header">
        <h1>Ahmet ÇAKIR</h1>
        <div className='links'>
          <h6>
            GitHub: <a href="https://github.com/aahmetcakir" target="_blank" rel='noreferrer' className='mail'>aahmetcakir</a>
          </h6>
          <h6>
            Contact me: <a href="mailto:ca.ahmetcakir@gmail.com" target="_blank" rel='noreferrer' className='mail'>ca.ahmetcakir@gmail.com</a>
          </h6>
          <h6>
            Linkedin: <a href="https://www.linkedin.com/in/aahmetcakir/" target="_blank" rel='noreferrer' className='mail'>aahmetcakir</a>
          </h6>
        </div>

      </header>
    </div>
  );
}

export default App;
