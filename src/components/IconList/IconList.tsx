type IconListProps = {
  iconName: string;
};

const IconList = ({ iconName }: IconListProps) => {
  return (
    <li>
      <a href="">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <span className={iconName}></span>
        </span>
      </a>
    </li>
  );
};

export default IconList;
