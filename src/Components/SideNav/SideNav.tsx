import style from "src/Components/SideNav/SideNav.module.css";
import aspireLogo from "src/assets/AspireLogo.svg";
import { TAGLINE, linksData } from "src/constants";

const SideNav = () => {
  return (
    <div className={`${style["sidenav-container"]}`}>
      <img src={aspireLogo} alt="aspire logo" width={125} height={35} />
      <div className={`${style["aspire-tagline"]}`}>{TAGLINE}</div>
      <div>
        {linksData.map((link, index) => (
          <div className={`flex ${style["link-data"]}`} key={index}>
            <img src={link.icon} alt={link.name} />
            <div
              className={`ml-4 text-base ${
                link.highlight ? "text-themeGreen" : "text-white"
              }`}
            >
              {link.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
