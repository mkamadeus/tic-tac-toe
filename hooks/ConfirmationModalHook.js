import {useState} from 'react';

const useConfirmationModal = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [leftButtonFunction, setLeftButtonFunction] = useState({
    func: () => {},
  });
  const [rightButtonFunction, setRightButtonFunction] = useState({
    func: () => {},
  });

  return [
    visible,
    setVisible,
    message,
    setMessage,
    leftButtonFunction,
    setLeftButtonFunction,
    rightButtonFunction,
    setRightButtonFunction,
  ];
};

export default useConfirmationModal;
