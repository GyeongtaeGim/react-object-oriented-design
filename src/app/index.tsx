import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootProvider from './provider';
import IndexPage from './page';

function App() {
  return (
    <RootProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </RootProvider>
  );
}

export default App;
