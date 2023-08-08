import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Node",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
      {skills.map(({ skill, color, level }) => (
        <Skill skill={skill} color={color} level={level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
