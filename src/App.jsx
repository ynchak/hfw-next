import { Card, CardBody, Divider } from "@nextui-org/react";
import FormAction from "./components/FormAction";
import {
  checkIsCategoryClean,
  makeLinks,
  openInConstruct,
  openSourcesAttr,
  openSourcesWithGoodsConfig,
  splitColumn,
  transformConfig,
} from "./formConfigs";
import FormSave from "./components/FormSave";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-2">
            <Card>
              <CardBody>
                <h1 className="text-center text-xl font-medium">
                  Перенесення товарів
                </h1>
              </CardBody>
            </Card>
            <Divider className="mt-2" />
            <FormAction {...openSourcesWithGoodsConfig} />
            <FormAction {...transformConfig} />
            <FormAction {...openInConstruct} />
            <FormAction {...splitColumn} />
          </div>
          <div className="mt-2">
            <Card>
              <CardBody>
                <h1 className="text-center text-xl font-medium">
                  Оновлення товарів
                </h1>
              </CardBody>
            </Card>
            <Divider className="mt-2" />
            <FormAction {...openSourcesAttr} />
            <FormSave />
            <FormAction {...checkIsCategoryClean} />
            <FormAction {...makeLinks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
