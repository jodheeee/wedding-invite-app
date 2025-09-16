import ModuleView from './components/layout/ModuleView';
import Main from './view/Main';
import Gallery from './view/Gallery';
import Map from './view/Map';
import Message from './view/Message';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect } from 'react';

const App = async () => {
  useEffect(() => {
    const delay = (ms = 3000) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    const loadContent = async () => {
      await delay();
    };
    loadContent();
  }, []);

  return (
    <ModuleView>
      <SpeedInsights />
      <Main />
      <Gallery />
      <Map />
      <Message />
    </ModuleView>
  );
};

export default App;
