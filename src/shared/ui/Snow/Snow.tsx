import './Snow.scss';

const DECEMBER = 11;
const FEBRUARY = 1;

function isSnowSeason(date = new Date()): boolean {
  const month = date.getMonth();
  const day = date.getDate();

  const isDecember = month === DECEMBER;
  const isJanuary = month === 0;
  const isFirstOfFebruary = month === FEBRUARY && day === 1;

  return isDecember || isJanuary || isFirstOfFebruary;
}

function Snow() {
  if (!isSnowSeason()) {
    return null;
  }

  return <div className='snow' />;
}

export default Snow;