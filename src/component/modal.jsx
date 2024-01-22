import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
// import { Children } from "react";
import Button from "./CustomButton";

const Modal = forwardRef(function Modal({children,  buttonCaption }, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    }
    );

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-center">

                <Button>
                    {buttonCaption}
                </Button>
            </form>
        </dialog >,
        document.getElementById('modal-root')
    );
});
export default Modal;