import "./App.css";

function App() {
  const intro =
    "Full-stack web developer. While coding, I love coffee! When not coding (still coffee!), I love to spend time with my wife and daughter. If I'm with the guys, I enjoy poker, board games, beer, whiskey, and theology.";
  const skills = [
    "HTML+CSS",
    "JavaScript",
    "Web Design",
    "Git and GitHub",
    "React",
    "Node",
  ];

  return (
    <div className="card">
      <Avatar photoName="profilePNG.png" />
      <div className="data">
        <Intro name="Matt Pike" text={intro} />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoName} alt="Avatar"></img>;
}

function Intro(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </>
  );
}

function SkillList(props) {
  return (
    <div className="skillList">
      <span className="skill" style={{ backgroundColor: "lightblue" }}>
        {props.skills[0]}
      </span>
      <span className="skill" style={{ backgroundColor: "red" }}>
        {props.skills[1]}
      </span>
      <span className="skill" style={{ backgroundColor: "lightgreen" }}>
        {props.skills[2]}
      </span>
      <span className="skill" style={{ backgroundColor: "lightpink" }}>
        {props.skills[3]}
      </span>
      <span className="skill" style={{ backgroundColor: "orange" }}>
        {props.skills[4]}
      </span>
      <span className="skill" style={{ backgroundColor: "yellow" }}>
        {props.skills[5]}
      </span>
    </div>
  );
}

export default App;
