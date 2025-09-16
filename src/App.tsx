import ModuleView from './components/layout/ModuleView';
import Main from './view/Main';
import Gallery from './view/Gallery';
import Map from './view/Map';
import Message from './view/Message';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
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
