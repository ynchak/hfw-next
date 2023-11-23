import FormAction from "./components/FormAction";
import {
  openInConstruct,
  openSourcesWithGoodsConfig,
  transformConfig,
} from "./formConfigs";
const transferGoods = openSourcesWithGoodsConfig;
const transfor = transformConfig;
const toConstruct = openInConstruct;
const App = () => {
  return (
    <>
      <FormAction {...transferGoods} />
      <FormAction {...transfor} />
      <FormAction {...toConstruct} />
    </>
  );
};

export default App;
