import useSaveFormStore from '../store';
import { openInNewTab } from '../utils';

const maxLines = 40;

const param = {
  address: 'https://gomer.rozetka.company/gomer/sellers/attributes/source/',
  attributes: '?SyncSourceAttributeSearch[attribute_id_title]=',
};
const category = {
  address: 'https://gomer.rozetka.company/gomer/sellers/attributes/source/',
  attributes: '?SyncSourceAttributeSearch[rz_category_id]=',
  param: '&SyncSourceAttributeSearch[attribute_id_title]=',
};
const vendor = {
  address: 'https://gomer.rozetka.company/gomer/sellers/vendors/source/',
  attributes: '?SyncSourceVendorSearch[producer_title]=',
};
const data = {
  param,
  category,
  vendor,
};
class Type {
  constructor(name, value) {
    this.value = value;
    this.data = data[name];
  }
  getAddres() {
    return this.data.address;
  }
  getAttributes() {
    return this.data.attributes + this.value;
  }
  getParam() {
    return this.getAttributes() + this.data.param;
  }
}
const createLink = (variant, source, param) => {
  const addres = variant.getAddres();
  const attributes = param
    ? variant.getParam() + param
    : variant.getAttributes();
  return `${addres}${source}${attributes}`;
};
const action = (column) => {
  const { variant, value, paramValue } = useSaveFormStore.getState();
  if (!variant) {
    throw `❌ Форма нижче 👇 не налаштована`;
  }
  const lines = column.split('\n');
  if (lines.length > maxLines + 1) {
    // last line is empty
    throw `Введено більше ${maxLines} джерел`;
  }
  const type = new Type(variant, value);
  const links = [];
  for (const line of lines) {
    if (line === '') continue;
    links.push(createLink(type, line, paramValue));
  }
  openInNewTab(links);
};
export default {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'Відкрити джерела з товарами',
  placeholder: 'Встав з excel стовпчик з source\nТакого виду: 31967',
  radioGroup: null,
  action,
};
