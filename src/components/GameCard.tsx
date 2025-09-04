import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Play, Github } from 'lucide-react'

interface Game {
  title: string
  description: string | React.ReactNode
  image: string
  tags: string[]
  status: string
  github?: string
  playUrl?: string
}

interface GameCardProps {
  game: Game
  index: number
}

export default function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:glow-blue transition-all duration-500 hover:scale-[1.02]">
        <div className="relative overflow-hidden bg-muted/20">
          <motion.img
            src={game.image}
            alt={game.title}
            className="w-full h-48 object-contain p-6 transition-transform duration-500 group-hover:scale-[1.05]"
            whileHover={{ scale: 1.02 }}
          />
        </div>
        
        <CardContent className="p-6">
          <h3 className="cinzel text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <p className="grenze text-muted-foreground mb-4 leading-relaxed h-16 overflow-hidden">
            {game.description}
          </p>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {game.playUrl ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:border-primary hover:text-gradient transition-colors bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20"
                asChild
              >
                <a href={game.playUrl} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2" size={16} />
                  Play Now!
                </a>
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:border-primary hover:text-gradient transition-colors bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20"
                asChild
              >
                <a href={game.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={16} />
                  View on GitHub
                </a>
              </Button>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}