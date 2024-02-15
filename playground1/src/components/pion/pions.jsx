

// eslint-disable-next-line react/prop-types
export default function Pion({ color, className, onClick }) {

    return (
      <div 
      className={`w-8 h-8 ${color || 'bg-black/10'} aspect-square rounded-full cursor-pointer transition-transform transform ${className || ''} hover:scale-110 `} 
      onClick={onClick}
      />
    );
  }