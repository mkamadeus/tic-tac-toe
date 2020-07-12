import { useState } from "react";

const ModalHook = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return [modalOpen, toggleModal];
};

export default ModalHook;
