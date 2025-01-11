import ModuleView from './components/layout/ModuleView';
import Main from './view/Main';
import Gallery from './view/Gallery';
import Map from './view/Map';

const App = () => {
  return (
    <ModuleView>
      <Main />
      <Gallery />
      <Map />
    </ModuleView>
  );
};

export default App;
