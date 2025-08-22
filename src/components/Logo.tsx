import { motion } from 'framer-motion'
import logoImage from '@/assets/images/roundLogo.png'

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
    >
      <img 
        src={logoImage}
        alt="Laserwolve Games Logo"
        width={size}
        height={size}
        className="drop-shadow-lg rounded-full"
      />
    </motion.div>
  )
}