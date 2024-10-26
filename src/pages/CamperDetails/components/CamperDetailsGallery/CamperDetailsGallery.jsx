export default function CamperDetailsGallery({ photos }) {
  if (!photos.length) return null;

  return (
    <ul>
      {photos.map(photo => (
        <li key={photo}>
          <img src={photo.thumb} alt="camper" />
        </li>
      ))}
    </ul>
  );
}
