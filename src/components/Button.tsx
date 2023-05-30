import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text?: string,
    className?: string,
    icon?: JSX.Element
}
export const Button = ({ text, icon,className, color, ...props }: ButtonProps) => {
    return (
        <button
            className={`${className} flex text-black items-center
             bg-blue-700 py-1 px-6 rounded-2xl`}
            {...props}
        >
            <span className={`text-sm uppercase tracking-wider`}>
                {text}
            </span>
            {icon && <span className="ml-4">{icon}</span>}
        </button>

    )
}