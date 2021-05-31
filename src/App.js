import './App.css';
import Home from '../src/components/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color:  #143D6E ; }'}</style>
      </Helmet>
      <Home />
    </div>

  );
}

export default App;
