import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TeamMemberType {
  name: string
  role: string
  avatar: string
  specialties: string[]
}

interface TeamMemberProps {
  member: TeamMemberType
  index: number
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0, rotateY: -20 }}
      whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, rotateY: 5 }}
    >
      <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:glow-blue transition-all duration-500 hover:scale-105">
        <CardContent className="p-0">
          <div className="relative">
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty) => (
                    <Badge 
                      key={specialty} 
                      className="text-xs bg-primary/20 text-primary border-primary/30"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="p-6 text-center">
            <motion.h3 
              className="cinzel text-xl font-bold mb-2 group-hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {member.name}
            </motion.h3>
            <motion.p 
              className="grenze text-accent font-medium mb-4"
              whileHover={{ scale: 1.02 }}
            >
              {member.role}
            </motion.p>
            
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}