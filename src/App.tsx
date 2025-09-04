import { motion } from 'framer-motion'
import { Gamepad2, Rocket, Users, Mail, Github, Twitter, Code2, Zap, Star } from 'lucide-react'
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
import Logo from '@/components/Logo'
import DaggerQuestLogo from '@/assets/images/DaggerQuestLogo.webp'
import PlainsOfShinarLogo from '@/assets/images/PlainsOfShinarLogo.webp'
import CAFfeineLogo from '@/assets/images/caffieneLogo.webp'
import OverlordLogo from '@/assets/images/overlordLogo.webp'
import DaggerTestLogo from '@/assets/images/daggertestLogo.webp'

function App() {
  const games = [
    {
      title: "DaggerQuest",
      description: "An old school hack n' slash Action Role-Playing Game (ARPG), playable in the browser.",
      image: DaggerQuestLogo,
      tags: ["RPG", "Adventure", "Fantasy"],
      status: "In Development",
      playUrl: "https://DaggerQuest.com"
    },
    {
      title: "Plains of Shinar",
      description: "A re-hash of DaggerQuest, built on a different tech stack and playable in a traditional desktop client.",
      image: PlainsOfShinarLogo,
      tags: ["Strategy", "Historical", "City Builder"],
      status: "In Development",
      github: "https://github.com/Laserwolve-Games/PlainsOfShinar"
    }
  ]

  const tools = [
    {
      title: "CAFfeine",
      description: "An automation framework for the Construct 3 Game Engine.",
      image: CAFfeineLogo,
      tags: ["Automation", "Testing", "Browser"],
      status: "Active Development",
      github: "https://github.com/Laserwolve-Games/CAFfeine"
    },
    {
      title: "Overlord",
      description: "A render pipeline management tool for creating assets for 2D games.",
      image: OverlordLogo,
      tags: ["Python", "3D Graphics", "Dashboard"],
      status: "Active Development",
      github: "https://github.com/Laserwolve-Games/Overlord"
    },
    {
      title: "DaggerTest",
      description: (
        <>
          An automated testing Framework for DaggerQuest and{' '}
          <a 
            href="https://DaggerQuest.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-accent underline transition-colors"
          >
            DaggerQuest.com
          </a>
          .
        </>
      ),
      image: DaggerTestLogo,
      tags: ["Testing", "Framework", "Quality Assurance"],
      status: "Active Development",
      github: "https://github.com/Laserwolve-Games/DaggerTest"
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
        id="games"
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
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              Our Tools
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <GameCard key={tool.title} game={tool} index={index} />
            ))}
          </div>
        </div>
      </motion.section>

      <footer className="relative py-12 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-6 md:mb-0 flex items-center gap-4"
            >
              <Logo size={60} />
              <div>
                <h3 className="cinzel text-2xl font-bold text-gradient mb-2">
                  Laserwolve Games
                </h3>
                <p className="grenze text-muted-foreground italic">
                  Making Games that People Want to Play
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              {[
                { icon: Github, href: "https://github.com/Laserwolve-Games" },
                { icon: Mail, href: "mailto:contact@laserwolvegames.com" }
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
            © 2025 Laserwolve Games. Licensed under the{' '}
            <a 
              href="https://github.com/Laserwolve-Games/LaserwolveGames.com?tab=MIT-1-ov-file"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent underline transition-colors"
            >
              MIT License
            </a>
            .
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default App