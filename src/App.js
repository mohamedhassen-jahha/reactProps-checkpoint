import Profile from "./profile/Profile";
import Profilephoto from "./profile/Profilephoto";

// Getting Data Of The User Form the Prompt
let FN = prompt("Your Name");
let biO = prompt("Your Bio");
let Prof = prompt("Your Profession");
let Img = prompt("Image profile Url");

// Def the Data and test it default value to prepere it for the defaultProps testing
let infos = {
  fullName: FN === "" ? undefined : FN,
  bio: biO === "" ? undefined : biO,
  profession: Prof === "" ? undefined : Prof,
  img: Img === "" ? "./pic.jpg" : Img,
};

let mainDiv = {
  display: "flex",
  alignContent: "center",
  flexDirection: "column",
  textAlign: "center",
};

let pictureStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  marginTop: "20px",
};

const handleName = () => {
  return alert(infos.fullName);
};

function App() {
  return (
    <div style={mainDiv}>
      <Profilephoto>
        <img style={pictureStyle} src={infos.img} alt="img" />
      </Profilephoto>
      <Profile
        fullName={infos.fullName}
        bio={infos.bio}
        prof={infos.profession}
      />
      {handleName()}
    </div>
  );
}

export default App;
