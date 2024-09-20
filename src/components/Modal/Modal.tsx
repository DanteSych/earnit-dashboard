interface ModalProps {
    IsOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    Title?: string;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ IsOpen, setIsOpen, Title = "Modal Content", children }) => {

    if (!IsOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[999999]">
            <div className="bg-black opacity-75 w-full h-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-2">
                <div className="bg-white p-5 w-full max-w-xl mx-auto rounded-xl">
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">{Title}</p>
                        <button onClick={() => setIsOpen(false)}><svg fill="currentColor" className="w-3 h-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" /></svg></button>
                    </div>
                    <div className="mt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;