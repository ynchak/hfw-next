import FormAction from "./components/FormAction";
import {
  openInConstruct,
  openSourcesWithGoodsConfig,
  splitColumn,
  transformConfig,
} from "./formConfigs";

const App = () => {
  return (
    <>
      <FormAction {...openSourcesWithGoodsConfig} />
      <FormAction {...transformConfig} />
      <FormAction {...openInConstruct} />
      <FormAction {...splitColumn} />
    </>
  );
};

export default App;
