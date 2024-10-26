import Icon from '../Icon/Icon';

export default function LikeButton({ onClick }) {
  return (
    <button
      type="button"
      className="hover:[&>svg]:fill-button"
      onClick={onClick}
    >
      <Icon name="like" size={26} />
    </button>
  );
}
