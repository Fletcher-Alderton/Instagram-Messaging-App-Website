import { ArrowRight, Lock, Globe, Instagram, Sparkles, MessageSquare } from "lucide-react"
import Link from "next/link"
import ScrollingText from "@/components/scrolling-text"
import FeatureCard from "@/components/feature-card"
import AiFeature from "@/components/ai-feature"
import GradientBackground from "@/components/gradient-background"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EarlyAccessForm from "@/components/early-access-form"
import TextPopup from "@/components/text-popup"

export default function Home() {
  return (
    <div className="text-[#ede8e7]">
      <GradientBackground
        className="fixed inset-0 z-[-1] opacity-80"
        primaryColor="#c7b3b4"
        secondaryColor="#4c6654"
      >
        <></>
      </GradientBackground>

      <main className="flex min-h-screen flex-col items-center relative z-10">
        <section className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 tracking-tighter relative z-10">
            Reimagine Your <span className="text-[#c7b3b4]">Instagram</span>
            <br />
            Conversations
          </h1>

          <p className="text-xl md:text-2xl text-center max-w-2xl mb-12 text-[#ede8e7]/80 relative z-10">
            A new messaging experience that connects with Instagram while eliminating distractions
          </p>

          <div className="w-full overflow-hidden my-12 relative z-10">
            <ScrollingText duration={100}>
              LESS TIME TYPING • MORE TIME TALKING • LESS TIME TYPING • MORE TIME TALKING •
            </ScrollingText>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#c7b3b4] hover:bg-[#c7b3b4]/90 text-black rounded-full px-8 py-6 text-lg font-medium relative z-10">
                  Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-black border-[#7c999d]">
                <DialogHeader>
                  <DialogTitle className="text-[#ede8e7]">Request Early Access</DialogTitle>
                  <DialogDescription className="text-[#ede8e7]/80">
                    Enter your email below to join the waitlist.
                  </DialogDescription>
                </DialogHeader>
                <EarlyAccessForm />
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-transparent to-black/70">
          <section className="w-full py-24 px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
                Designed for <span className="text-[#7c999d]">privacy</span> and{" "}
                <span className="text-[#4c6654]">connection</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Lock className="h-8 w-8 text-[#c7b3b4]" />}
                  title="End-to-End Encryption"
                  description="Your conversations are for your eyes only. No one else can read your messages, ensuring complete privacy."
                  color="#c7b3b4"
                />

                <FeatureCard
                  icon={<Globe className="h-8 w-8 text-[#4c6654]" />}
                  title="Cross-Platform Experience"
                  description="Enjoy the same seamless experience across all your devices, with perfect synchronization."
                  color="#4c6654"
                />

                <FeatureCard
                  icon={<Instagram className="h-8 w-8 text-[#7c999d]" />}
                  title="Instagram Without Distractions"
                  description="Stay connected with your Instagram contacts without the endless scrolling and notifications."
                  color="#7c999d"
                />
              </div>
            </div>
          </section>

          <section className="w-full py-24 px-4 md:px-8 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
                Powered by <span className="text-[#7c999d]">Advanced AI</span>
              </h2>

              <p className="text-xl text-center max-w-2xl mx-auto mb-16 text-[#ede8e7]/80">
                Our AI features learn and adapt to you, making communication effortless
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                <AiFeature
                  title="Predictive Typing"
                  description="AI that learns your writing style and predicts what you'll say next, making conversations flow naturally."
                  icon={<Sparkles className="h-10 w-10" />}
                />

                <AiFeature
                  title="Smart Summarizations"
                  description="Quickly catch up on long conversations with AI-generated summaries that highlight what matters."
                  icon={<MessageSquare className="h-10 w-10" />}
                />

                <AiFeature
                  title="Business Auto-Responses"
                  description="Let AI handle customer inquiries automatically, with responses that sound just like you."
                  icon={<MessageSquare className="h-10 w-10" />}
                />

                <AiFeature
                  title="Advanced Grammar Check"
                  description="The most sophisticated spelling and grammar correction that learns your unique communication style."
                  icon={<Sparkles className="h-10 w-10" />}
                />
              </div>

              <div className="w-full overflow-hidden my-24">
                <ScrollingText duration={100}>
                  LESS TIME TYPING • MORE TIME TALKING • LESS TIME TYPING • MORE TIME TALKING •
                </ScrollingText>
              </div>
            </div>
          </section>

          <section className="w-full py-24 px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your conversations?</h2>

              <p className="text-xl max-w-2xl mx-auto mb-12 text-[#ede8e7]/80">
                Join our early access program and be among the first to experience the future of messaging
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#c7b3b4] hover:bg-[#c7b3b4]/90 text-black rounded-full px-8 py-6 text-lg font-medium">
                      Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-black border-[#7c999d]">
                    <DialogHeader>
                      <DialogTitle className="text-[#ede8e7]">Request Early Access</DialogTitle>
                      <DialogDescription className="text-[#ede8e7]/80">
                        Enter your email below to join the waitlist.
                      </DialogDescription>
                    </DialogHeader>
                    <EarlyAccessForm />
                  </DialogContent>
                </Dialog>

                <TextPopup
                  title="Learn More"
                  content="More details about the product features and vision will be available here soon!"
                  trigger={
                    <Button
                      variant="outline"
                      className="border-[#7c999d] text-[#7c999d] hover:bg-[#7c999d]/10 rounded-full px-8 py-6 text-lg font-medium"
                    >
                      Learn More
                    </Button>
                  }
                />
              </div>
            </div>
          </section>

          <footer className="w-full py-12 px-4 md:px-8 border-t border-[#ede8e7]/10 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <p className="text-[#ede8e7]/60 mb-4 md:mb-0">© 2025 IDK what to call it yet. All rights reserved - Not Really</p>

              <div className="flex gap-6">
                <TextPopup
                  title="Privacy Policy"
                  content={
                    <>
                      Privacy Policy details. We value your privacy...
                      <br />
                      I dont know what to put here Im not a lawyer
                    </>
                  }
                  trigger={
                    <span className="text-[#ede8e7]/60 hover:text-[#c7b3b4] cursor-pointer">Privacy</span>
                  }
                />
                <TextPopup
                  title="Terms of Service"
                  content={
                    <>
                      Terms of Service details.
                      <br />
                      Once again I dont know what to put here Im not a lawyer
                    </>
                  }
                  trigger={
                    <span className="text-[#ede8e7]/60 hover:text-[#c7b3b4] cursor-pointer">Terms</span>
                  }
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <span className="text-[#ede8e7]/60 hover:text-[#c7b3b4] cursor-pointer">Contact</span>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-black border-[#7c999d]">
                    <DialogHeader>
                      <DialogTitle className="text-[#ede8e7]">Contact Us</DialogTitle>
                      <DialogDescription className="text-[#ede8e7]/80">
                        Send us a message using the form below.
                      </DialogDescription>
                    </DialogHeader>
                    <EarlyAccessForm />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

