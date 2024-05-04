import './Glassmorphism.css';

const Glassmorphism = () => {
  return (
    <section className="glassmorphism">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <ul className="glassmorphism-list">
        <li>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Glassmorphism;
