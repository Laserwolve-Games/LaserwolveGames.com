import { motion } from 'framer-motion'

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
      <svg 
        width={size} 
        height={size * 0.8} 
        viewBox="0 0 512 410" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Dark wolf head */}
        <path 
          d="M25 365C25 365 45 175 120 150C195 125 245 140 290 120C335 100 385 110 420 130C455 150 485 175 485 365C485 365 465 345 440 340C415 335 390 340 365 345C340 350 315 355 290 350C265 345 240 340 215 345C190 350 165 355 140 350C115 345 90 340 65 345C40 350 25 365 25 365Z" 
          fill="#333333"
        />
        
        {/* Light wolf head overlay */}
        <path 
          d="M150 365C150 365 170 200 230 180C290 160 330 170 370 155C410 140 450 150 475 170C500 190 520 200 520 365C520 365 500 345 480 342C460 339 440 342 420 345C400 348 380 351 360 348C340 345 320 342 300 345C280 348 260 351 240 348C220 345 200 342 180 345C160 348 150 365 150 365Z" 
          fill="#999999"
        />
        
        {/* Eyes */}
        <ellipse cx="200" cy="250" rx="12" ry="18" fill="white" />
        <ellipse cx="350" cy="250" rx="12" ry="18" fill="white" />
        
        {/* Ears - dark wolf */}
        <path d="M160 120L200 170L180 180L140 140Z" fill="#333333" />
        <path d="M200 110L240 160L220 170L180 130Z" fill="#333333" />
        
        {/* Ears - light wolf */}
        <path d="M310 140L350 190L330 200L290 160Z" fill="#999999" />
        <path d="M350 130L390 180L370 190L330 150Z" fill="#999999" />
        
        {/* Nose area */}
        <path d="M240 320L280 315L275 335L245 340Z" fill="#222222" />
      </svg>
    </motion.div>
  )
}