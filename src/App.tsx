import ModuleView from './components/layout/ModuleView';
import Main from './view/Main';
import Gallery from './view/Gallery';
import Map from './view/Map';
import Message from './view/Message';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  try {
    throw new Error('oops!');
  } catch (error: any) {
    console.error('에러 발생:', error.message);
    console.error('스택 트레이스:', error.stack);
    alert('에러발생');
    return null;
  }
  
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
