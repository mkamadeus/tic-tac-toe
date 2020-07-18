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

  // const showConfirmationModal = (newMessage, lFunction, rFunction) => {
  //   setMessage(newMessage);
  //   setLeftButtonFunction(lFunction);
  //   setRightButtonFunction(rFunction);
  //   // setVisible(true);
  // };

  // const hideConfirmationModal = () => {
  //   // setVisible(false);
  // };

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
