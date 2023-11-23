import FormAction from "./components/FormAction";
import { openSourcesWithGoodsConfig, transformConfig } from "./formConfigs";
const transferGoods = openSourcesWithGoodsConfig;
const transfor = transformConfig;
const App = () => {
  return (
    <>
      <FormAction {...transferGoods} />
      <FormAction {...transfor} />
    </>
  );
};

export default App;
