export default function Header() {
  return (
    <div className="header">
      <img
        src={require("../images/logo.png")}
        width="150"
        height="100"
        alt="logo"
        className="logo"
      />
      <h1>
        Organize your task efficiently with categories and smart filtering
      </h1>
    </div>
  );
}
