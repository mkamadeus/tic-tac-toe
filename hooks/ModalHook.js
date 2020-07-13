import { useState } from "react";

const ModalHook = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return [modalOpen, setModalOpen];
};

export default ModalHook;
