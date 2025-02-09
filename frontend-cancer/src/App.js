import 'devextreme/dist/css/dx.light.css';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import Individuals from './components/Individuals/Individuals';
import GenomicVariations from './components/GenomicVariations/GenomicVariations';
import Biosamples from './components/Biosamples/Biosamples';
import Runs from './components/Runs/Runs';
import Analyses from './components/Analyses/Analyses';
import Cohorts from './components/Cohorts/Cohorts';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/NavBar/Navbar';
import SignInForm from './components/SignIn/SignInForm';
import ResultsDatasets from './components/Datasets/ResultsDatasets';
import CrossQueries from './components/CrossQueries/CrossQueries';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Individuals />} />
        <Route path='/individuals' element={<Individuals />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}



export default App;