interface ButtonProps {
  onClick: () => void
  label: string
  variant?: 'primary' | 'secondary'
}

export default function Button({ 
  onClick, 
  label, 
  variant = 'primary' 
}: ButtonProps) {
  const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition-colors'
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400'
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  )
}
