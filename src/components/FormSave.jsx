import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import useSaveFormStore from "../store";

const settingsData = {
  category: "ID категорії",
  param: "ID параметру",
  vendor: "Виробник",
};

const FormSave = () => {
  const { variant, value, paramValue, setData } = useSaveFormStore();
  const [selectValue, setSelectValue] = useState(variant || "");
  const [settingsInputValue, setSettingsInputValue] = useState(value || "");
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
    if (selectValue !== "category") {
      setSettingsInputParamValue("");
    }
    setData({
      variant: selectValue,
      value: settingsInputValue,
      paramValue: settingsInputParamValue,
    });
  };
  const handlerReset = (e) => {
    e.preventDefault();
    setSelectValue("");
    setSettingsInputValue("");
    setSettingsInputParamValue("");
    setData({
      variant: "",
      value: "",
      paramValue: "",
    });
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
                  placeholder={value || `Введи ${settingsData[selectValue]}`}
                  onChange={handlerSettingsInput}
                />
                {selectValue === "category" && (
                  <Input
                    placeholder={paramValue || `Введи ID параметру`}
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
