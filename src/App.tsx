import React, { useState } from 'react';
import { 
  Menu, 
  X,
  Copy,
} from 'lucide-react';
import logo from '../src/assets/logopix.png';
import coffeeboy from '../src/assets/Coffeeboy.png';
import chartboy from '../src/assets/pizzaboy.png';
import ray from '../src/assets/logoraydium.png';
import mexc from '../src/assets/mexclogo.png';
import meteora from '../src/assets/meteora.png';
import dex from '../src/assets/Dexscreenner.png';
import cmc from '../src/assets/CMC.png';
import telegram from '../src/assets/Telegram.png';
import gecko from '../src/assets/coingecko.png';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setSocialOpen] = useState(false);
  
  const contract = "comercial.pixelpoint@gmail.com";
  
  const copyContract = () => {
    navigator.clipboard.writeText(contract);
    alert('Contract copied to clipboard!');
  };

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#181F35] text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-[#181F35]/90 backdrop-blur-sm z-50">
        <div className="container mx-full px-28">
          <div className="flex items-center justify h-16">
            <div className="flex items-center space-x-8">
              <div className="absolute left-0 items-center space-x-2">
                <img 
                  src={logo} 
                  alt="logo"
                  className="w-24 h-14 md:w-28 md:h-16 pb-2 object-center"
                />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="hover:text-[#22D1F8] transition-colors">About</a>
                <a href="#how-to-buy" className="hover:text-[#22D1F8] transition-colors">How to Buy</a>
                <a href="#tokenomics" className="hover:text-[#22D1F8] transition-colors">Tokenomics</a>
                
                <div className="relative">
                  <button 
                    onClick={() => setSocialOpen(!isSocialOpen)}
                    className="items-center space-x-1 hover:text-[#22D1F8] transition-colors"
                  >
                    <span>Socials</span>
                  </button>
                  
                  {isSocialOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#181F35] border border-[#22D1F8]/20 rounded-lg shadow-xl">
                      <a href="https://t.me/" target="_blank" rel="noopener noreferrer" 
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-[#22D1F8]/10  pt-4 pb-6">
                        <img 
                          src={telegram} 
                          alt="telegram"
                          className="w-3 h-3 absolute left-1"
                        />
                        <span className='absolute left-7'>Telegram</span>
                      </a>
                      <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-[#22D1F8]/10 pb-6">
                        <img 
                          src={dex} 
                          alt="dex"
                          className="w-4 h-4 absolute left-1"
                        />
                        <span className='absolute left-7'>Dex Screener</span>
                      </a>
                      <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-[#22D1F8]/10 pb-6">
                        <img 
                          src={cmc} 
                          alt="dex"
                          className="w-6 h-4 absolute left-0"
                        />
                        <span className='absolute left-7'>CoinMarketCap</span>
                      </a>
                      <a href="https://coingecko.com/" target="_blank" rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-[#22D1F8]/10 pb-6">
                        <img 
                          src={gecko} 
                          alt="dex"
                          className="w-4 h-4 absolute left-1"
                        />
                        <span className='absolute left-7'>CoinGecko</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 right-6"/>}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-[#181F35] border-t border-[#22D1F8]/20 absolute right-0 w-64">
            <div className="flex flex-col space-y-4">
              <a href="#about" onClick={handleMobileNavClick} className="hover:text-[#22D1F8] transition-colors">About</a>
              <a href="#how-to-buy" onClick={handleMobileNavClick} className="hover:text-[#22D1F8] transition-colors">How to Buy</a>
              <a href="#tokenomics" onClick={handleMobileNavClick} className="hover:text-[#22D1F8] transition-colors">Tokenomics</a>
              
              {/* Mobile Social Links */}
              <div className="pt-2 border-t border-[#22D1F8]/20">
                <p className="text-sm text-[#abc4ff] mb-2">Social Links</p>
                <div className="grid grid-cols-1 gap-2">
                  <a href="https://t.me/" target="_blank" rel="noopener noreferrer" 
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]">
                    <span>Telegram</span>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]">
                    <span>X</span>
                  </a>
                  <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]">
                    <span>Dex Screener</span>
                  </a>
                  <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]">
                    <span>CoinMarketCap</span>
                  </a>
                  <a href="https://coingecko.com/" target="_blank" rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]">
                    <span>CoinGecko</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text">
            PixelPoint
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-[#abc4ff]">
            Demo LandingPage for memecoins and more.
          </p>
          <div className=" bg-[#181F35]/50 p-3 md:p-4 rounded-lg inline-flex items-center space-x-4 border border-[#22D1F8]/20 text-sm md:text-base overflow-x-auto max-w-full">
            <code className="text-[#22D1F8] whitespace-nowrap">{contract}</code>
            <button onClick={copyContract} className="hover:text-[#22D1F8] flex-shrink-0">
              <Copy className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          {/* Buy Now Button */}
          <div className='pt-4 mx-auto'>
            <button className="px-1 md:px-6">
              <img 
                src={ray} 
                alt="ray"
                className="w-12 h-8 pt-0 pb-1"
              />
            </button>
            <button className="px-2 md:px-6">
              <img 
                src={mexc} 
                alt="ray"
                className="w-8 h-8 pt-0 pb-1"
              />
            </button>
            <button className="px-2 md:px-6">
              <img 
                src={meteora} 
                alt="ray"
                className="w-8 h-8 pt-0 pb-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 bg-[#181F35]/50">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-[#abc4ff]">
              Instead of launching yet another <span className="text-[#22D1F8] font-bold">dog-themed crypto</span>, we chose to build websites — just for fun. Yeah, you heard that right.
            </p>
            <p className="text-base md:text-lg text-[#abc4ff]">
              Fueled by <span className="text-[#FF4EA3] font-bold">coffee</span> and <span className="text-[#22D1F8] font-bold">questionable life choices</span>, we turn lines of code into sites that (mostly) don't crash.
            </p>
            <p className="text-base md:text-lg text-[#abc4ff]">
              We're not a <span className="text-[#FF4EA3] font-bold">big tech empire</span>, we don't have investors, and we sure as hell won't promise to take you to the <span className="text-[#22D1F8] font-bold">moon</span> 🌕.
            </p>
            <p className="text-base md:text-lg text-[#abc4ff]">
              But hey, we make <span className="text-[#FF4EA3] font-bold">pretty damn good websites</span>. If it breaks? Blame the dev.
            </p>
            <p className="text-base md:text-lg text-[#abc4ff]">
              We create because we <span className="text-[#22D1F8] font-bold">love it</span>, we innovate because we <span className="text-[#FF4EA3] font-bold">mess up</span>.
            </p>
          </div>
          <div className="h-48 sm:h-64 md:h-full w-full">
            <img 
              src={coffeeboy}
              alt="Funny tech"
              className="w-64 h-64 md:w-full md:h-full object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="pb-4 text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text">
            How to Buy $PXPT
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: 1,
                text: "First, you need an idea. Make sure you actually know what you want. If not, don’t worry—we’ll help you think. 😉"
              },
              {
                step: 2,
                text: "Let’s get to know your goals. Knowing where you want to go is crucial… so we can figure out how much coffee to buy and whether we need to resort to other substances."
              },
              {
                step: 3,
                text: "Deal closed! We’re happy (we’re Brazilian, and our currency is basically Monopoly money anyway), and you get a top-quality product."
              }
            ].map(({ step, text }) => (
              <div 
                key={step}
                className="p-6 md:p-8 bg-[#181F35] rounded-lg border border-[#22D1F8]/20 hover:border-[#22D1F8] transition-all hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] flex items-center justify-center text-sm md:text-base">
                    {step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Step {step}</h3>
                </div>
                <p className="text-sm md:text-base text-[#abc4ff]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16 md:py-20 px-4 bg-[#181F35]/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text">
            Pixelnomics
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-64 h-64 md:w-full md:h-full object-cover mx-auto">
              <img 
                src={chartboy}
                alt="Tokenomics"
                className="rounded-lg w-full h-48 sm:h-64 md:h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 md:order-2">
              {[
                "1 Billion Ideas",
                "All on paper",
                "I'm feeling lazy",
                "I'll do it tomorrow"
              ].map((text, index) => (
                <div 
                  key={index}
                  className="p-4 md:p-6 bg-[#181F35] rounded-lg border border-[#22D1F8]/20 hover:border-[#22D1F8] transform hover:scale-105 transition-all"
                  style={{
                    transform: `rotate(${Math.random() * 6 - 3}deg)`
                  }}
                >
                  <p className="text-center font-bold text-sm md:text-lg text-[#abc4ff]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 md:py-6 text-center text-[#abc4ff] text-sm md:text-base">
        <p>This page exists purely to entertain, so don’t take anything too seriously. We’re professionals… we swear.</p>
        <p>Copyright © 2025 PixelPoint.</p>
      </footer>
    </div>
  );
}

export default App;