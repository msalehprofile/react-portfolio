import { MouseEventHandler } from 'react';
import './PersonalisedButton.scss';

type PersonalisedButtonProps = {
    handleButtonClick?: MouseEventHandler;
    label: string
    color: "primary" | "secondary"
    size: "small" | "medium" | "large"
}

const PersonalisedButton = ({handleButtonClick, label, color, size}: PersonalisedButtonProps) => {
  return (
    <div>
        <button onClick={handleButtonClick} className={`button button__${color} && button button__${size}`}>{label}</button>
    </div>
  )
}

export default PersonalisedButton