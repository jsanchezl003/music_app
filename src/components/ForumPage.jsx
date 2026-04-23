import { musicData } from '../data/musicData';

export default function ForumPage() {
  return (
    <div className="container">
      <h1 style={{ marginBottom: '1.5rem' }}>💬 Foro Comunitario</h1>
      <div className="forum-topics">
        {musicData.forumTopics.map((topic) => (
          <div key={topic.id} className="forum-topic">
            <h2 className="forum-title">{topic.title}</h2>
            <div className="forum-meta">
              <span className="forum-author">👤 {topic.author}</span>
              <span>📅 {topic.date}</span>
              <span>💬 {topic.replies} respuestas</span>
              <span>👁️ {topic.views} visitas</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
