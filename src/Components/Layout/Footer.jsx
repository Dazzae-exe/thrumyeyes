import { IconSvg as Logo } from "../../assets/svg/Logo/IconSvg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-LayoutContainer">
        <div className="Footer-SocialContainer">
          <div className="Footer-LogoName">
            <Logo />
            <h2>Thrumyeyes</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
