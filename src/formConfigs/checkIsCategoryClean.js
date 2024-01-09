import useSaveFormStore from '../store';
import { openInNewTab } from '../utils';

const type = {
  source: {
    addres:
      'https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[1][field]=sync_source_id&searchParams[1][condition]=%3D&searchParams[1][value]=',
    params:
      '&searchParams[2][field]=category&searchParams[2][condition]=%3D&searchParams[2][value]=',
    attr: '&pageCondition=all&page=0&pageSize=50&size=500',
    maxLines: 50,
  },
  id: {
    addres:
      'https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[id%3D1][field]=goods_id&searchParams[id%3D1][condition]=%3D&searchParams[id%3D1][value]=',
    params:
      '&searchParams[id%3D2][field]=category&searchParams[id%3D2][condition]=%3D&searchParams[id%3D2][value]=',
    attr: '&pageCondition=all&page=0&pageSize=50&size=500',
    maxLines: 500,
  },
};
// const maxLines = 30
const action = (column, field) => {
  const { variant, value } = useSaveFormStore.getState();
  if (variant !== 'category' || !variant) {
    throw `❌ Форма вишче ☝️ не налаштована`;
  }
  const { addres, params, attr, maxLines } = type[field];
  const lines = column.split('\n');
  if (lines.length > maxLines + 1) {
    // last line is empty
    throw `Введено більше ${maxLines} джерел`;
  }
  const links = [];
  for (const line of lines) {
    if (!line) {
      continue;
    }

    links.push();
  }

  const link = `${addres}${lines.join(',')}${params}${value}${attr}`;
  // console.log(link);
  openInNewTab([link]);
};
export default {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'До конструктора умов',
  placeholder:
    'Перевірити чи залишились товари в категорії.\nВстав стовпчик з id джерелами',
  radioGroup: {
    defaultValue: 'id',
    values: [
      { type: 'source', value: 'Джерела' },
      { type: 'id', value: 'Товари' },
    ],
  },
  action,
};
