import { XCircleIcon } from "@heroicons/react/24/outline";
const Modal = ({ title, open, setOpen, children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
