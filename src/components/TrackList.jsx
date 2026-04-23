export default function TrackList({ tracks }) {
  return (
    <div className="tracks-section">
      <h2 className="section-title">🎵 Canciones</h2>
      <ul className="track-list">
        {tracks.map((track, index) => (
          <li key={index} className="track-item">
            <span className="track-number">{index + 1}</span>
            <span className="track-name">{track}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
