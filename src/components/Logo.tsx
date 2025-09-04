import { motion } from 'framer-motion'
import logoImage from '@/assets/images/roundLogo.webp'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 120, className = "" }: LogoProps) {
  return (
    <motion.div 
      className={`inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: 'transparent'
      }}
    >
      <img 
        src={logoImage}
        alt="Laserwolve Games Logo"
        width={size}
        height={size}
        className="drop-shadow-lg w-full h-full object-cover"
        style={{ backgroundColor: 'transparent' }}
      />
    </motion.div>
  )
}