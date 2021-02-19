import React, { ReactNode } from "react";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean,
  title: string,
  onClose: () => void,
  children: ReactNode
}

const defaultProps: ModalProps = {
  isOpen: false,
  title: '',
  onClose: () => { console.log('close') },
  children: null
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }:ModalProps) => {

  return (
    <>
      {isOpen ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl h-1/2">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between px-4 py-3 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-bold text-purple">
                    {title}
                  </h3>
                  <Button
                    bgColor="transparent"
                    textColor="gray-darkest"
                    icon="times"
                    onClick={onClose}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div onClick={onClose} className="opacity-60 fixed inset-0 z-40 bg-gray-darkest"></div>
        </>
      ) : null}
    </>
  );
}

Modal.defaultProps = defaultProps;

export default Modal;