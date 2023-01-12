

type ButtonProps = {
    className: string;
    children: any;
    style: any
    onClick: any
};


// export enum NotifyType {
//     error = "error",
//     success = "success",
//     warning = "warning"
// }


export default function Button({ className, children, style, onClick }: Partial<ButtonProps>) {
    return (
        <>
            <button className={`flex items-center justify-center text-white px-6 bg-comas-second   ${className}`} style={style} onClick={onClick} > {children} </button>
        </>
    )
}
