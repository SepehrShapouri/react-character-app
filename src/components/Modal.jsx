import { XCircleIcon } from "@heroicons/react/24/outline";
import { useOpen } from "../context/OpenContext";
import { useFavorites } from "../context/FavoritesContext";
const Modal = ({ title }) => {
  const { favorites } = useFavorites();
  const { open, setOpen } = useOpen();
  if (!open) return null;
  return (
    <div>
      <div className="backdrop" onClick={() => setOpen(false)}></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button onClick={() => setOpen(false)}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
        {favorites.map((item) => (
          <FavoriteCharacter item={item} />
        ))}
      </div>
    </div>
  );
};

export default Modal;
