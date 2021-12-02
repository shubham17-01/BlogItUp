import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitle">BlogItUp</span>
      </div>
      <img
        className="headerImg"
        src="./images/Background.jpg"
        alt=""
      />
    </div>
  );
}
