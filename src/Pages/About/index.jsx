import Avatar from "../../Components/Avatar/Avatar";
import Preview from "../../Components/Preview/Preview";
import Profile from "../../Components/Profile/Profile";
import "../../assets/styles/About/_About.scss";

function About() {
  return (
    <div className="About-GridSystem">
      <Avatar />
      <Preview />
      <Profile />
    </div>
  )
}

export default About;