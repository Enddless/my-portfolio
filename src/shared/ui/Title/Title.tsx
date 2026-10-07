import './Title.scss';

interface TitleProps {
  text: string;
}

function Title({ text }: TitleProps) {
  return <h2 className='title'>{text}</h2>;
}

export default Title;