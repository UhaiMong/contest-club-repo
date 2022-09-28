import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import QA from './Components/QA/QA';

function App() {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <QA></QA>
    </div>
  );
}

export default App;
