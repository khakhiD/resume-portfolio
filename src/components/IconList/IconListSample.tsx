import IconList from './IconList';
import './IconList.css';

const IconListSample = () => {
  return (
    <ul className="icon-list">
      <IconList iconName="fa fa-github"></IconList>
      <IconList iconName="fa fa-twitter"></IconList>
      <IconList iconName="fa fa-whatsapp"></IconList>
      <IconList iconName="fa fa-linkedin"></IconList>
      <IconList iconName="fa fa-instagram"></IconList>
    </ul>
  );
};

export default IconListSample;
