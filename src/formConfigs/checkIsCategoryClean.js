import useSaveFormStore from '../store';
import { openInNewTab } from '../utils';

const maxLines = 50;
const action = (column) => {
  const { variant, value } = useSaveFormStore.getState();
  if (variant !== 'category' || !variant) {
    throw `❌ Форма вишче ☝️ не налаштована`;
  }
  const lines = column.split('\n');
  if (lines.length > maxLines + 1) {
    // last line is empty
    throw `Введено більше ${maxLines} джерел`;
  }
  const link = ``;
  console.log(lines.join('+'));
  // openInNewTab([link]);
};
export default {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'До конструктора умов',
  placeholder:
    'Перевірити чи залишились товари в категорії.\nВстав стовпчик з id джерелами',
  radioGroup: null,
  action,
};
