import FormAction from "./components/FormAction";
import { openSourcesWithGoodsConfig } from "./formConfigs";
const transferGoods = openSourcesWithGoodsConfig;
const App = () => {
  return (
    <>
      <FormAction {...transferGoods} />
    </>
  );
};

export default App;
