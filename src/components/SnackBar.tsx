import { useState, useEffect, JSX } from 'react';
import '../assets/styles/snackbar.css'; // Importando o arquivo CSS

interface SnackbarProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

function Snackbar({
  message,
  type = 'success',
  duration = 10000,
  onClose = undefined,
}: SnackbarProps): JSX.Element | null {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [message, duration, onClose]);

  if (!visible) return null;

  const typeClass = `snackbar-${type}`;

  return (
    <div className={`snackbar ${typeClass}`}>
      {message}
    </div>
  );
}

export default Snackbar;
