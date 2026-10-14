
import { useState, useEffect } from 'react';
import './App.css';


const initialAssignments = [
  {
    id: 1,
    title: 'Research Report',
    subject: 'Computer Science',
    due: 'Due Friday',
    priority: 'High',
    completed: false,
  },
  {
    id: 2,
    title: 'Group Presentation',
    subject: 'Business Studies',
    due: 'Due Monday',
    priority: 'Medium',
    completed: false,
  },
  {
    id: 3,
    title: 'Database Exercises',
    subject: 'Information Systems',
    due: 'Due Wednesday',
    priority: 'Low',
    completed: false,
  },
];




function App() {
  const [assignments, setAssignments] = useState(() => {
  const savedAssignments = localStorage.getItem('studyspace-assignments');

  if (savedAssignments !== null) {
    try {
      return JSON.parse(savedAssignments);
    } catch {
      return initialAssignments;
    }
  }

  return initialAssignments;
});
  useEffect(() => {
  localStorage.setItem(
    'studyspace-assignments',
    JSON.stringify(assignments)
  );
}, [assignments]);

const [title, setTitle] = useState('');
const [subject, setSubject] = useState('');
const [due, setDue] = useState('');
const [priority, setPriority] = useState('Medium');


  const totalAssignments = assignments.length;

  const completedAssignments = assignments.filter(
    (assignment) => assignment.completed
  ).length;

  const pendingAssignments =
    totalAssignments - completedAssignments;
    
function handleAddAssignment(event) {
  event.preventDefault();

  if (!title.trim() || !subject.trim() || !due) {
    return;
  }

  const newAssignment = {
    id: Date.now(),
    title: title.trim(),
    subject: subject.trim(),
    due: `Due ${due}`,
    priority: priority,
    completed: false,
  };

  setAssignments((current) => [
    ...current,
    newAssignment,
  ]);

  setTitle('');
  setSubject('');
  setDue('');
  setPriority('Medium');
}


  
    // Keep the rest of your existing JSX here

  return (
    

    <div className="dashboard">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">S</div>
          <span>StudySpace</span>
        </div>

        <p className="nav-heading">WORKSPACE</p>

        <nav className="navigation">
          <a className="nav-link active" href="#dashboard">
            <span>▦</span> Dashboard
          </a>
          <a className="nav-link" href="#assignments">
            <span>☷</span> Assignments
          </a>
          <a className="nav-link" href="#timetable">
            <span>▦</span> Timetable
          </a>
          <a className="nav-link" href="#notes">
            <span>▤</span> My Notes
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="student-avatar">S</div>
          <div>
            <strong>Student</strong>
            <p>Undergraduate</p>
          </div>
        </div>
      </aside>

      <main className="main-content" id="dashboard">
        <header className="topbar">
          <div className="breadcrumb">Workspace / Dashboard</div>
          <div className="topbar-right">
            <span className="status-dot"></span>
            <span>My study space</span>
            <div className="top-avatar">S</div>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="eyebrow">YOUR ACADEMIC SPACE</p>
            <h1>Welcome back! <span>👋</span></h1>
            <p className="welcome-text">
              Small steps today, big achievements tomorrow.
            </p>
          </div>
          <div className="welcome-art">🎓</div>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <div className="stat-icon purple-icon">☷</div>
            <p>Total assignments</p>
            <h2>{totalAssignments}</h2>
            <span className="stat-note">Keep up the good work</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon green-icon">✓</div>
            <p>Completed</p>
            <h2>{completedAssignments}</h2>
            <span className="stat-note">Tasks finished</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon orange-icon">◷</div>
            <p>Pending tasks</p>
            <h2>{pendingAssignments}</h2>
            <span className="stat-note">One step at a time</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon blue-icon">✧</div>
            <p>Study goal</p>
            <h2>75%</h2>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel assignments-panel" id="assignments">
            <div className="panel-heading">
              <div>
                <h2>Upcoming assignments</h2>
                <p>Keep track of your deadlines</p>
              </div>
              <span className="view-label">This week</span>
            </div>

            
<form className="add-assignment-form" onSubmit={handleAddAssignment}>
  <h3>Add a new assignment</h3>

  <label htmlFor="assignment-title">Assignment title</label>
  <input
    id="assignment-title"
    type="text"
    placeholder="e.g. Research Report"
    value={title}
    onChange={(event) => setTitle(event.target.value)}
    required
  />

  <label htmlFor="assignment-subject">Module / Subject</label>
  <input
    id="assignment-subject"
    type="text"
    placeholder="e.g. Computer Science"
    value={subject}
    onChange={(event) => setSubject(event.target.value)}
    required
  />

  <label htmlFor="assignment-due">Deadline</label>
  <input
    id="assignment-due"
    type="date"
    value={due}
    onChange={(event) => setDue(event.target.value)}
    required
  />

  <label htmlFor="assignment-priority">Priority</label>
  <select
    id="assignment-priority"
    value={priority}
    onChange={(event) => setPriority(event.target.value)}
  >
    <option value="High">High</option>
    <option value="Medium">Medium</option>
    <option value="Low">Low</option>
  </select>

  <button className="primary-button add-button" type="submit">
    + Add Assignment
  </button>
</form>


            <div className="assignment-list">
              {assignments.map((assignment) => (
                <div className="assignment-item" key={assignment.id}>
                  <div className="assignment-symbol">▤</div>
                  <div className="assignment-details">
                    <strong>{assignment.title}</strong>
                    <p>{assignment.subject}</p>
                  </div>
                  
<div className="assignment-meta">
  <span
    className={`priority ${assignment.priority.toLowerCase()}`}
  >
    {assignment.priority}
  </span>

  <small>{assignment.due}</small>

  <button
    className="complete-button"
    onClick={() => {
      setAssignments((current) =>
        current.map((item) =>
          item.id === assignment.id
            ? { ...item, completed: !item.completed }
            : item
        )
      );
    }}
  >
    {assignment.completed ? '✓ Completed' : 'Mark done'}
  </button>
</div>

                </div>
              ))}
            </div>

            <button className="secondary-button" onClick={() => document.getElementById('assignments')?.scrollIntoView({ behavior: 'smooth' })}>
              View assignments →
            </button>
          </article>

          <article className="panel focus-panel">
            <div className="panel-heading">
              <div>
                <h2>Your focus space</h2>
                <p>Make time for what matters</p>
              </div>
              <span className="focus-emoji">✦</span>
            </div>

            <div className="focus-circle">
              <div>
                <strong>25:00</strong>
                <span>minutes</span>
              </div>
            </div>

            <p className="focus-message">
              One focused session can make a difference.
            </p>

            <button className="primary-button" onClick={() => alert('Our study timer is coming in the next step!')}>
              Start focusing →
            </button>
          </article>
        </section>

        <footer className="footer">
          Made for your university journey <span>♥</span>
        </footer>
      </main>
        <section className="panel timetable-panel" id="timetable">
          <div className="panel-heading">
            <div>
              <h2>My Timetable</h2>
              <p>Your weekly class schedule</p>
            </div>
            <span className="view-label">This week</span>
          </div>

          <div className="timetable-list">
            <article className="timetable-item">
              <div className="timetable-day">MON</div>
              <div className="timetable-details">
                <strong>Introduction to Programming</strong>
                <p>8:00 AM – 10:00 AM</p>
                <span>Lecture Hall A</span>
              </div>
            </article>

            <article className="timetable-item">
              <div className="timetable-day">TUE</div>
              <div className="timetable-details">
                <strong>Database Management</strong>
                <p>10:00 AM – 12:00 PM</p>
                <span>Computer Lab 2</span>
              </div>
            </article>
          </div>
        </section>

    </div>
  );
}

export default App;

