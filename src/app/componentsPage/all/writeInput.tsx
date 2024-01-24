interface Props {
    type: "text" | "password" | "email",
    placeholder: string,
    size: string,
}

export default function WriteInput({placeholder, type, size}:Props) {
    return (
        <input className={`w-${size} bg-inherit border-b-2 border-white outline-none py-1 text-[0.8rem] text-white focus:border-gray-500 transition-[0.1s]`}
        placeholder={placeholder} 
        type={type} />
    )
}