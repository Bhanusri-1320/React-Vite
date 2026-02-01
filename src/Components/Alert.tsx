import type { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    onCloseClick: () => void;
}
const Alertfn = () => { console.log("Alert function called"); }
const Alert = ({ children, onCloseClick }: AlertProps) => {
    return (
        // <div className="alert alert-primary" role="alert" onClick={Alertfn}>
        //     {children}
        // </div>
        <div className="alert alert-primary" role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onCloseClick}></button>
        </div>
    );
}
export default Alert;