import './App.css';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <>
      <h1>NETFLIX</h1>
      <Row title={'Netflix Originals'} 
      fetchUrl={requests.fetchNetflixOriginals}/>
    </>
  );
}

export default App;
