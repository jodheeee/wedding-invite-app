import ModuleView from './components/layout/ModuleView';
import Main from './view/Main';
import Gallery from './view/Gallery';
import Map from './view/Map';
import Message from './view/Message';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useEffect } from 'react';
import SlowLCPComponent from './components/common/SlowLCPComponent';

const App = () => {

  useEffect(() => {
    fetch('/api');
  }, []);

  return (
    <ModuleView>
      <SpeedInsights />
      <SlowLCPComponent />
      <Main />
      <Gallery />
      <Map />
      <Message />
    </ModuleView>
  );
};

export default App;
