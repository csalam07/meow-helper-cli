import Table from 'cli-table3';

const createTable = () => {
  return new Table({
    chars: {
      top: '',
      'top-mid': '',
      'top-left': '',
      'top-right': '',
      bottom: '',
      'bottom-mid': '',
      'bottom-left': '',
      'bottom-right': '',
      left: '',
      'left-mid': '',
      mid: '',
      'mid-mid': '',
      right: '',
      'right-mid': '',
      middle: '',
    },
    style: {
      'padding-left': 0,
      'padding-right': 0,
    },
    wordWrap: true,
  });
};

export default createTable;
