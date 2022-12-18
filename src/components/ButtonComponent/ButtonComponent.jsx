import { FaChevronRight } from "react-icons/fa";

export const ButtonComponent = ({ color, changeStyle }) => {
  return (
    <div className="buttonComponent">
      <button style={{ backgroundColor: color }} onClick={changeStyle}>
        <FaChevronRight color="white" />
      </button>
    </div>
  );
};
