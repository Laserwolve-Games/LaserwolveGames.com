import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Play } from '@phosphor-icons/react'

interface Game {
  title: string
  description: string
  image: string
  tags: string[]
  status: string
}

interface GameCardProps {
  game: Game
  index: number
}

export default function GameCard({ game, index }: GameCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Released':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'In Development':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'Coming Soon':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:glow-blue transition-all duration-500 hover:scale-105">
        <div className="relative overflow-hidden">
          <motion.img
            src={game.image}
            alt={game.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-background/50"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button size="sm" className="bg-primary/20 backdrop-blur-sm border border-primary/30">
                <Play className="mr-2" size={16} />
                View Details
              </Button>
            </motion.div>
          </motion.div>
          <Badge 
            className={`absolute top-4 right-4 ${getStatusColor(game.status)}`}
          >
            {game.status}
          </Badge>
        </div>
        
        <CardContent className="p-6">
          <h3 className="orbitron text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {game.title}
          </h3>
          <p className="inter text-muted-foreground mb-4 leading-relaxed">
            {game.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {game.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
            >
              <ExternalLink className="mr-2" size={16} />
              Learn More
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}