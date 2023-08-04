import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src="profilePNG.png" alt="Matt Pike"></img>;
}

function Intro(props) {
  return (
    <div>
      <h1>Matt Pike</h1>
      <p>
        Full-stack web developer. While coding, I love coffee! When not coding
        (still coffee!), I love to spend time with my wife and daughter. If I'm
        with the guys, I enjoy poker, board games, beer, whiskey, and theology.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="React" color="blue" />
      <Skill skill="JavaScript" color="orange" />
      <Skill skill="React" color="purple" />
      <Skill skill="Node" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
    </div>
  );
}

export default App;
