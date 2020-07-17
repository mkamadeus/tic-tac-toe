import {useState} from 'react';

const useConfirmationModal = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [leftButtonFunction, setLeftButtonFunction] = useState(() => {});
  const [rightButtonFunction, setRightButtonFunction] = useState(() => {});

  const showConfirmationModal = (message, lFunction, rFunction) => {
    setMessage(message);
    setLeftButtonFunction(lFunction);
    setRightButtonFunction(rFunction);
    setVisible(true);
  };

  const hideConfirmationModal = () => {
    setVisible(false);
  };

  return [
    visible,
    message,
    leftButtonFunction,
    rightButtonFunction,
    showConfirmationModal,
    hideConfirmationModal,
  ];
};

export default useConfirmationModal;
