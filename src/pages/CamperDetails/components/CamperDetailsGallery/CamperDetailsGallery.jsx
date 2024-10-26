export default function CamperDetailsGallery({ photos }) {
  if (!photos.length) return null;

  return (
    <ul className="flex gap-12 flex-wrap">
      {photos.map(photo => (
        <li
          key={photo.thumb}
          className="w-[292px] h-[312px] rounded-[10px] overflow-hidden"
        >
          <img
            className="w-full h-full object-cover object-center"
            src={photo.thumb}
            alt="camper"
            width={292}
            height={312}
          />
        </li>
      ))}
    </ul>
  );
}
