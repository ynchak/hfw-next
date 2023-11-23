import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";

const settingsData = {
  category: "ID категорії",
  param: "ID параметру",
  vendor: "Виробник",
};

const FormSave = () => {
  const [selectValue, setSelectValue] = useState("");
  const [settingsInputValue, setSettingsInputValue] = useState("");
  const [settingsInputParamValue, setSettingsInputParamValue] = useState("");

  const handlerSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const handlerSettingsInput = (e) => {
    setSettingsInputValue(e.target.value);
  };
  const handlerSettingsParamInput = (e) => {
    setSettingsInputParamValue(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
  };
  const handlerReset = (e) => {
    e.preventDefault();
    setSelectValue("");
    setSettingsInputValue("");
    setSettingsInputParamValue("");
  };
  return (
    <Card className="mt-4">
      <CardBody>
        <form
          autoComplete="off"
          onSubmit={handlerSubmit}
          onReset={handlerReset}
        >
          <Select
            label="Налаштування"
            onChange={handlerSelect}
            defaultSelectedKeys={[selectValue]}
          >
            {Object.entries(settingsData).map(([value, lable]) => (
              <SelectItem key={value} value={value}>
                {lable}
              </SelectItem>
            ))}
          </Select>
          {selectValue && (
            <>
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder={`Введи ${settingsData[selectValue]}`}
                  onChange={handlerSettingsInput}
                  value={settingsInputValue}
                />
                {selectValue === "category" && (
                  <Input
                    placeholder={`Введи ID параметру`}
                    onChange={handlerSettingsParamInput}
                    value={settingsInputParamValue}
                  />
                )}
              </div>
              <div className="flex justify-between mt-2">
                <Button
                  endContent=""
                  color="primary"
                  type="reset"
                  variant="faded"
                >
                  Очистити значення
                </Button>
                <Button endContent="" color="success" type="submit">
                  Зберегти
                </Button>
              </div>
            </>
          )}
        </form>
      </CardBody>
    </Card>
  );
};
export default FormSave;
