import FormAction from "./components/FormAction";
import {
  makeLinks,
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
      <FormAction {...makeLinks} />
    </>
  );
};

export default App;
