import { useState } from 'react';
import styles from './Timeline.module.css';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'work' | 'project' | 'achievement';
  skills?: string[];
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    date: 'August 2021 - May 2025',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Louisiana State University',
    description: 'Pursued a comprehensive computer science education with focus on software engineering, algorithms, and full-stack development.',
    type: 'education',
    skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Web Development']
  },
  {
    id: 2,
    date: 'June 2023 - August 2023',
    title: 'Software Engineering Intern',
    organization: 'Your Company Name',
    description: 'Developed and maintained web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver features.',
    type: 'work',
    skills: ['React', 'TypeScript', 'Node.js', 'Git']
  },
  {
    id: 3,
    date: 'January 2024 - May 2024',
    title: 'The Sensationalist',
    organization: 'Personal Project',
    description: 'Built a full-stack publication website with user authentication, article management, and responsive design.',
    type: 'project',
    skills: ['React', 'Express', 'MongoDB', 'Auth0']
  },
  {
    id: 4,
    date: 'September 2023',
    title: 'Hackathon Winner',
    organization: 'LSU Hackathon',
    description: 'Led a team to develop an innovative solution, winning first place among 50+ teams.',
    type: 'achievement',
    skills: ['Leadership', 'Problem Solving', 'Rapid Prototyping']
  },
  {
    id: 5,
    date: 'May 2023',
    title: 'Python Audio Processor',
    organization: 'Personal Project',
    description: 'Created a real-time audio processing application simulating guitar effects pedals using signal processing techniques.',
    type: 'project',
    skills: ['Python', 'Audio Processing', 'NumPy', 'GUI Development']
  }
];

const Timeline = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEvents = selectedType === 'all'
    ? timelineData
    : timelineData.filter(event => event.type === selectedType);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'work':
        return '💼';
      case 'project':
        return '🚀';
      case 'achievement':
        return '🏆';
      default:
        return '📌';
    }
  };

  return (
    <div className={styles.timelineSection}>
      <h2 className={styles.heading}>My Journey</h2>
      <p className={styles.subheading}>
        A timeline of my career, education, and key milestones
      </p>

      {/* Filter Buttons */}
      <div className={styles.filters}>
        <button
          className={`${styles.filterBtn} ${selectedType === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedType('all')}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${selectedType === 'education' ? styles.active : ''}`}
          onClick={() => setSelectedType('education')}
        >
          🎓 Education
        </button>
        <button
          className={`${styles.filterBtn} ${selectedType === 'work' ? styles.active : ''}`}
          onClick={() => setSelectedType('work')}
        >
          💼 Work
        </button>
        <button
          className={`${styles.filterBtn} ${selectedType === 'project' ? styles.active : ''}`}
          onClick={() => setSelectedType('project')}
        >
          🚀 Projects
        </button>
        <button
          className={`${styles.filterBtn} ${selectedType === 'achievement' ? styles.active : ''}`}
          onClick={() => setSelectedType('achievement')}
        >
          🏆 Achievements
        </button>
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        {filteredEvents.map((event, index) => (
          <div
            key={event.id}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.timelineContent}>
              <div className={styles.timelineIcon}>
                {getEventIcon(event.type)}
              </div>
              <div className={styles.timelineCard}>
                <span className={styles.date}>{event.date}</span>
                <h3 className={styles.title}>{event.title}</h3>
                <h4 className={styles.organization}>{event.organization}</h4>
                <p className={styles.description}>{event.description}</p>
                {event.skills && event.skills.length > 0 && (
                  <div className={styles.skills}>
                    {event.skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Rock Layer (matching your other sections) */}
      <svg className={styles.rockLayer} viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,50 Q360,20 720,40 T1440,30 L1440,100 L0,100 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Timeline;
