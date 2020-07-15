import React, { useState } from "react";

export const ModalContext = React.createContext();

export const ModalContextProvider = (props) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [leftButtonFunction, setLeftButtonFunction] = useState(() => {});
  const [rightButtonFunction, setRightButtonFunction] = useState(() => {});

  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible,
        message,
        setMessage,
        leftButtonFunction,
        setLeftButtonFunction,
        rightButtonFunction,
        setRightButtonFunction,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
