
import './App.css';

const assignments = [
  {
    id: 1,
    title: 'Research Report',
    subject: 'Computer Science',
    due: 'Due Friday',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Group Presentation',
    subject: 'Business Studies',
    due: 'Due Monday',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Database Exercises',
    subject: 'Information Systems',
    due: 'Due Wednesday',
    priority: 'Low',
  },
];

function App() {
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
            <h2>06</h2>
            <span className="stat-note">Keep up the good work</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon green-icon">✓</div>
            <p>Completed</p>
            <h2>03</h2>
            <span className="stat-note">Tasks finished</span>
          </article>

          <article className="stat-card">
            <div className="stat-icon orange-icon">◷</div>
            <p>Pending tasks</p>
            <h2>03</h2>
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
    </div>
  );
}

export default App;
