

type ButtonProps = {
    className: string;
    children: any;
    style: any
    onClick: any
    type: any
};


// export enum NotifyType {
//     error = "error",
//     success = "success",
//     warning = "warning"
// }


export default function Button({ className, children, style, onClick, type }: Partial<ButtonProps>) {
    return (
        <>
            <button className={`flex items-center justify-center text-white px-6 bg-comas-second   ${className}`} type={type} style={style} onClick={onClick} > {children} </button>
        </>
    )
}
