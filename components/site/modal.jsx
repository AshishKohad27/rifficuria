import { useState } from "react";
import { HiXMark } from "react-icons/hi2";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const closeModal = (e) => {
        // Close the modal if the click is outside the modal content
        if (e.target.id === "modal-overlay") {
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Open Modal
            </button>

            {isOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"
                    onClick={closeModal}
                >
                    <div className="bg-white p-6 rounded shadow-lg w-1/3" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold">Modal Title</h2>
                            <button onClick={toggleModal}>
                                <HiXMark className="w-6 h-6 text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>
                        <div className="mt-4">
                            <p>This is a simple modal with Tailwind CSS.</p>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={toggleModal}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
