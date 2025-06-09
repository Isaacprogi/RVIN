import React, { useEffect, useState } from 'react';
import i18n from '../../i18n';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
  isRtl?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  showArrow = true,
  size = 'md',
  variant = 'primary',
}) => {
  const [dir, setDir] = useState<'rtl' | 'ltr'>(i18n.language === 'ar' ? 'rtl' : 'ltr');

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      const newDir = lng === 'ar' ? 'rtl' : 'ltr';
      setDir(newDir);
      document.documentElement.dir = newDir;
    };
    i18n.on('languageChanged', handleLangChange);
    return () => i18n.off('languageChanged', handleLangChange);
  }, []);

  const sizeClasses = {
    sm: 'px-2 text-xs h-8',
    md: 'px-3 text-sm h-11',
    lg: 'px-4 text-base h-12',
  };

  const variantClasses = {
    primary: 'from-[#3E3DFF] to-[#E789FF]',
    secondary: 'from-[#6366F1] to-[#EC4899]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
        rounded-md 
        flex 
        items-center 
        gap-2 
        bg-gradient-to-r 
        text-white 
        font-bold
        transition-all 
        duration-300 
        ease-in-out
        hover:shadow-lg 
        hover:scale-105
        hover:brightness-110
        active:scale-95
        disabled:opacity-50 
        disabled:cursor-not-allowed 
        disabled:hover:scale-100
        disabled:hover:brightness-100
      `}
      style={{ animation: disabled ? 'none' : undefined }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.classList.add('animate-blink');
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.classList.remove('animate-blink');
      }}
    >
      <span>{children}</span>
      {showArrow && (
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 320 512"
            className={` ${dir === 'rtl' ? 'rotate-180' : 'rotate-0'}`}
            height="1em"
            width="1em"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default GradientButton;
