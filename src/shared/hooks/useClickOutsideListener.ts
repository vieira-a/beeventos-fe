import { useEffect, useRef } from 'react';

const useClickOutsideListener = (isOpen: boolean, onClose: () => void) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const loginForm = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        loginForm.current &&
        !dialogRef.current.contains(event.target as Node) &&
        !loginForm.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return dialogRef;
};

export default useClickOutsideListener;
