interface LayoutButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function LayoutButton({ children, onClick, className }: LayoutButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        w-full h-full text-left transition-all duration-200 
        cursor-pointer bg-primary-100 hover:bg-hover-100
        ${className}
      `}
        >
            {children}
        </button>
    );
}
