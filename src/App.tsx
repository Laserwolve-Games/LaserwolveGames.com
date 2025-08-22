import { motion } from 'framer-motion'
import { GamepadIcon, Rocket, Users, Mail, Github, Twitter, Code2, Zap, Star } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import ParticleBackground from '@/components/ParticleBackground'
import HeroSection from '@/components/HeroSection'
import GameCard from '@/components/GameCard'
import TeamMember from '@/components/TeamMember'

function App() {
  const games = [
    {
      title: "Neon Runners",
      description: "A high-speed cyberpunk racing game with stunning visual effects",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      tags: ["Unity", "C#", "Multiplayer"],
      status: "Released"
    },
    {
      title: "Stellar Conquest",
      description: "Epic space strategy game with real-time combat and exploration",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
      tags: ["Unreal", "C++", "Strategy"],
      status: "In Development"
    },
    {
      title: "Mystic Realms",
      description: "Fantasy RPG featuring immersive storytelling and magical combat",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tags: ["Unity", "C#", "RPG"],
      status: "Coming Soon"
    }
  ]

  const team = [
    {
      name: "Alex Chen",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specialties: ["Game Design", "Creative Vision", "Team Leadership"]
    },
    {
      name: "Maya Rodriguez",
      role: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b8?w=150&h=150&fit=crop&crop=face",
      specialties: ["Unity", "C#", "Optimization"]
    },
    {
      name: "Jordan Kim",
      role: "Art Director",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      specialties: ["3D Modeling", "Concept Art", "Visual Effects"]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      
      <HeroSection />

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="cinzel text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Games
            </h2>
            <p className="grenze text-xl text-muted-foreground max-w-2xl mx-auto">
              Pushing the boundaries of interactive entertainment with cutting-edge technology and innovative gameplay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard key={game.title} game={game} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="cinzel text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Services
            </h2>
            <p className="grenze text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional gaming experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: GamepadIcon, title: "Game Development", desc: "Full-cycle game development from prototype to release" },
              { icon: Code2, title: "Technical Consulting", desc: "Expert guidance on engine selection and optimization" },
              { icon: Star, title: "Art & Design", desc: "Stunning visuals and immersive art direction" },
              { icon: Zap, title: "Prototyping", desc: "Rapid prototyping to validate game concepts" },
              { icon: Rocket, title: "Publishing", desc: "End-to-end publishing and marketing support" },
              { icon: Users, title: "Team Augmentation", desc: "Skilled developers to enhance your team" }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:glow-blue transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="inline-block p-4 rounded-full bg-primary/20 mb-6"
                    >
                      <service.icon size={32} className="text-primary" />
                    </motion.div>
                    <h3 className="cinzel text-xl font-bold mb-4">{service.title}</h3>
                    <p className="grenze text-muted-foreground">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="cinzel text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Meet the Team
            </h2>
            <p className="grenze text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented creators passionate about crafting extraordinary gaming experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="cinzel text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get In Touch
            </h2>
            <p className="grenze text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your gaming vision to life? Let's create something extraordinary together
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glow-blue bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="grenze font-medium text-sm mb-2 block">Name</label>
                      <Input 
                        placeholder="Your name" 
                        className="bg-background/50 border-border/50 focus:border-primary focus:glow-blue"
                      />
                    </div>
                    <div>
                      <label className="grenze font-medium text-sm mb-2 block">Email</label>
                      <Input 
                        type="email" 
                        placeholder="your@email.com" 
                        className="bg-background/50 border-border/50 focus:border-primary focus:glow-blue"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="grenze font-medium text-sm mb-2 block">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      className="bg-background/50 border-border/50 focus:border-primary focus:glow-blue"
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:glow-orange transition-all duration-300"
                    >
                      <Mail className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <footer className="relative py-12 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-6 md:mb-0"
            >
              <h3 className="cinzel text-2xl font-bold text-gradient mb-2">
                Laserwolve Games
              </h3>
              <p className="grenze text-muted-foreground">
                Crafting the future of gaming
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors hover:glow-blue"
                >
                  <social.icon size={20} className="text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <Separator className="my-8 bg-border/30" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-muted-foreground grenze text-sm"
          >
            © 2024 Laserwolve Games. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App