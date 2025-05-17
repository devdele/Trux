"use client";

import { useEffect, useState } from "react";
import { Menu, X, Copy } from "lucide-react";
import logo from "../src/assets/logopix.png";
import coffeeboy from "../src/assets/Coffeeboy.png";
import chartboy from "../src/assets/pizzaboy.png";
import ray from "../src/assets/logoraydium.png";
import mexc from "../src/assets/mexclogo.png";
import meteora from "../src/assets/meteora.png";
import dex from "../src/assets/Dexscreenner.png";
import cmc from "../src/assets/CMC.png";
import telegram from "../src/assets/Telegram.png";
import gecko from "../src/assets/coingecko.png";

// Import new components
import { ThemeProvider, useTheme } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { BackToTop } from "./components/back-to-top";
import { CookieConsent } from "./components/cookie-consent";
import { Roadmap } from "./components/roadmap";
import { FAQ } from "./components/faq";
import { Testimonials } from "./components/testimonials";
import { TokenomicsChart } from "./components/tokenomics-chart";
import { AnimatedBackground } from "./components/animated-background";
import { initAOS } from "./lib/aos";

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setSocialOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  const contract = "0x7F4Bee656c6616030900D1Eafc46E2B0ACcadDD4";

  const copyContract = () => {
    navigator.clipboard.writeText(contract);
    alert("Contract copied to clipboard!");
  };

  // Close mobile menu when clicking a link
  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
  };

  // Initialize animations on scroll
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      initAOS();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#181F35] z-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text">
            TruxPoint
          </h1>
          <div className="flex space-x-2 justify-center">
            <div className="w-3 h-3 rounded-full bg-[#22D1F8] animate-pulse"></div>
            <div
              className="w-3 h-3 rounded-full bg-[#22D1F8] animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-3 h-3 rounded-full bg-[#22D1F8] animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#181F35] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 dark:bg-[#181F35]/90 backdrop-blur-sm z-50 transition-colors duration-300 border-b border-gray-200 dark:border-[#22D1F8]/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img
                  src={logo || "/placeholder.svg"}
                  alt="logo"
                  className="w-24 h-14 md:w-28 md:h-16 pb-2 object-center"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <a
                  href="#about"
                  className="hover:text-[#22D1F8] transition-colors"
                >
                  About
                </a>
                <a
                  href="#how-to-buy"
                  className="hover:text-[#22D1F8] transition-colors"
                >
                  How to Buy
                </a>
                <a
                  href="#tokenomics"
                  className="hover:text-[#22D1F8] transition-colors"
                >
                  Tokenomics
                </a>
                <a
                  href="#roadmap"
                  className="hover:text-[#22D1F8] transition-colors"
                >
                  Roadmap
                </a>
                <a
                  href="#team"
                  className="hover:text-[#22D1F8] transition-colors"
                >
                  Team
                </a>
                <a
                  href="#faq"
                  className="hover:text-[#22D1F8] transition-colors"
                >
                  FAQ
                </a>

                <div className="relative">
                  <button
                    onClick={() => setSocialOpen(!isSocialOpen)}
                    className="flex items-center space-x-1 hover:text-[#22D1F8] transition-colors"
                  >
                    <span>Socials</span>
                  </button>

                  {isSocialOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#181F35] border border-gray-200 dark:border-[#22D1F8]/20 rounded-lg shadow-xl transition-colors duration-300 animate-fadeIn">
                      <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#22D1F8]/10 transition-colors"
                      >
                        <img
                          src={telegram || "/placeholder.svg"}
                          alt="telegram"
                          className="w-4 h-4"
                        />
                        <span>Telegram</span>
                      </a>
                      <a
                        href="https://dexscreener.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#22D1F8]/10 transition-colors"
                      >
                        <img
                          src={dex || "/placeholder.svg"}
                          alt="dex"
                          className="w-4 h-4"
                        />
                        <span>Dex Screener</span>
                      </a>
                      <a
                        href="https://coinmarketcap.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#22D1F8]/10 transition-colors"
                      >
                        <img
                          src={cmc || "/placeholder.svg"}
                          alt="cmc"
                          className="w-4 h-4"
                        />
                        <span>CoinMarketCap</span>
                      </a>
                      <a
                        href="https://coingecko.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#22D1F8]/10 transition-colors"
                      >
                        <img
                          src={gecko || "/placeholder.svg"}
                          alt="gecko"
                          className="w-4 h-4"
                        />
                        <span>CoinGecko</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              {/* <ThemeToggle /> */}

              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden p-4 bg-white dark:bg-[#181F35] border-t border-gray-200 dark:border-[#22D1F8]/20 animate-slideUp">
            <div className="flex flex-col space-y-4">
              <a
                href="#about"
                onClick={handleMobileNavClick}
                className="hover:text-[#22D1F8] transition-colors"
              >
                About
              </a>
              <a
                href="#how-to-buy"
                onClick={handleMobileNavClick}
                className="hover:text-[#22D1F8] transition-colors"
              >
                How to Buy
              </a>
              <a
                href="#tokenomics"
                onClick={handleMobileNavClick}
                className="hover:text-[#22D1F8] transition-colors"
              >
                Tokenomics
              </a>
              <a
                href="#roadmap"
                onClick={handleMobileNavClick}
                className="hover:text-[#22D1F8] transition-colors"
              >
                Roadmap
              </a>
              <a
                href="#team"
                onClick={handleMobileNavClick}
                className="hover:text-[#22D1F8] transition-colors"
              >
                Team
              </a>
              <a
                href="#faq"
                onClick={handleMobileNavClick}
                className="hover:text-[#22D1F8] transition-colors"
              >
                FAQ
              </a>

              {/* Mobile Social Links */}
              <div className="pt-2 border-t border-gray-200 dark:border-[#22D1F8]/20">
                <p className="text-sm text-gray-500 dark:text-[#abc4ff] mb-2">
                  Social Links
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]"
                  >
                    <img
                      src={telegram || "/placeholder.svg"}
                      alt="telegram"
                      className="w-3 h-3 mr-1"
                    />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://dexscreener.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]"
                  >
                    <img
                      src={dex || "/placeholder.svg"}
                      alt="dex"
                      className="w-3 h-3 mr-1"
                    />
                    <span>Dex Screener</span>
                  </a>
                  <a
                    href="https://coinmarketcap.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]"
                  >
                    <img
                      src={cmc || "/placeholder.svg"}
                      alt="cmc"
                      className="w-3 h-3 mr-1"
                    />
                    <span>CoinMarketCap</span>
                  </a>
                  <a
                    href="https://coingecko.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm hover:text-[#22D1F8]"
                  >
                    <img
                      src={gecko || "/placeholder.svg"}
                      alt="gecko"
                      className="w-3 h-3 mr-1"
                    />
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
        <div className="container mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text">
            TruxPoint
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-600 dark:text-[#abc4ff]">
            More than just a token.
          </p>
          <div className="bg-gray-100/50 dark:bg-[#181F35]/50 p-3 md:p-4 rounded-lg inline-flex items-center space-x-4 border border-gray-200 dark:border-[#22D1F8]/20 text-sm md:text-base overflow-x-auto max-w-full">
            <code className="text-[#22D1F8] whitespace-nowrap">{contract}</code>
            <button
              onClick={copyContract}
              className="hover:text-[#22D1F8] flex-shrink-0 transition-transform hover:scale-110"
              aria-label="Copy contract address"
            >
              <Copy className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
          {/* Buy Now Button */}
          <div className="pt-8 mx-auto flex justify-center space-x-4">
            <a
              href="https://raydium.io/swap/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-float transition-transform"
            >
              <img
                src={ray || "/placeholder.svg"}
                alt="Raydium"
                className="w-32 h-10 object-contain"
              />
            </a>
            <a
              href="https://www.mexc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-float transition-transform"
            >
              <img
                src={mexc || "/placeholder.svg"}
                alt="MEXC"
                className="w-32 h-10 object-contain"
              />
            </a>
            <a
              href="https://meteora.ag/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-float transition-transform"
            >
              <img
                src={meteora || "/placeholder.svg"}
                alt="Meteora"
                className="w-32 h-10 object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#181F35]/50 transition-colors duration-300"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text">
              About Us
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-[#abc4ff]">
              Instead of launching yet another{" "}
              <span className="text-[#22D1F8] font-bold">
                generic NFT project
              </span>
              , we chose to build websites — just for fun. Yeah, you heard that
              right.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-[#abc4ff]">
              Fueled by{" "}
              <span className="text-[#FF4EA3] font-bold">late nights</span> and{" "}
              <span className="text-[#22D1F8] font-bold">
                questionable coding choices
              </span>
              , we turn lines of code into sites that (mostly) don't crash.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-[#abc4ff]">
              We're not a{" "}
              <span className="text-[#FF4EA3] font-bold">big tech company</span>
              , we don't have investors, and we sure as hell won't promise to
              take you to the{" "}
              <span className="text-[#22D1F8] font-bold">moon</span> 🌕.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-[#abc4ff]">
              But hey, we make{" "}
              <span className="text-[#FF4EA3] font-bold">
                pretty damn good websites
              </span>
              . If it breaks? Blame the dev.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-[#abc4ff]">
              We create because we{" "}
              <span className="text-[#22D1F8] font-bold">love it</span>, we
              innovate because we{" "}
              <span className="text-[#FF4EA3] font-bold">get bored</span>.
            </p>
          </div>
          <div
            className="h-48 sm:h-64 md:h-full w-full"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <img
              src={coffeeboy || "/placeholder.svg"}
              alt="Funny tech"
              className="w-64 h-64 md:w-full md:h-full object-cover mx-auto rounded-lg shadow-lg hover-float"
            />
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text"
            data-aos="fade-up"
          >
            How to Buy $TXPT
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: 1,
                title: "Get a Wallet",
                text: "Get a Phantom or metamask wallet. We don't care which one, but don't come crying to us if you lose your seed phrase.",
                delay: 0,
              },
              {
                step: 2,
                title: "Buy SOL",
                text: "Buy some SOL. We only accept SOL, sorry. You can get it from any major exchange.",
                delay: 100,
              },
              {
                step: 3,
                title: "Swap for $TXPT",
                text: "Buy $TXPT on Raydium, MEXC, or Meteora. If you're lucky, you might even get a decent price.",
                delay: 200,
              },
            ].map(({ step, title, text, delay }) => (
              <div
                key={step}
                className="p-6 md:p-8 bg-white dark:bg-[#181F35] rounded-lg border border-gray-200 dark:border-[#22D1F8]/20 hover:border-[#22D1F8] transition-all hover:-translate-y-2 duration-300 shadow-sm hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={delay}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] flex items-center justify-center text-white font-bold">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-600 dark:text-[#abc4ff]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section
        id="tokenomics"
        className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#181F35]/50 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text"
            data-aos="fade-up"
          >
            Truxnomics
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1" data-aos="fade-right">
              <TokenomicsChart />
            </div>
            <div className="order-1 md:order-2" data-aos="fade-left">
              <img
                src={chartboy || "/placeholder.svg"}
                alt="Tokenomics"
                className="rounded-lg w-full h-auto object-cover shadow-lg hover-float"
              />
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-white dark:bg-[#181F35] rounded-lg border border-gray-200 dark:border-[#22D1F8]/20 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-[#22D1F8]">
                    Total Supply
                  </h3>
                  <p className="text-gray-600 dark:text-[#abc4ff]">
                    1,000,000,000 $TXPT
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-[#181F35] rounded-lg border border-gray-200 dark:border-[#22D1F8]/20 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-[#FF4EA3]">
                    Initial Liquidity
                  </h3>
                  <p className="text-gray-600 dark:text-[#abc4ff]">
                    40% of tokens locked for 1 year
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-[#181F35] rounded-lg border border-gray-200 dark:border-[#22D1F8]/20 transition-colors">
                  <h3 className="text-lg font-bold mb-2 text-[#22D1F8]">Tax</h3>
                  <p className="text-gray-600 dark:text-[#abc4ff]">
                    0% buy / 0% sell - We're not greedy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text"
            data-aos="fade-up"
          >
            Roadmap
          </h2>
          <Roadmap />
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#181F35]/50 transition-colors duration-300"
      >
        <div className="container mx-auto"></div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text"
            data-aos="fade-up"
          >
            What People Say
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-16 md:py-20 px-4 bg-gray-50 dark:bg-[#181F35]/50 transition-colors duration-300"
      >
        <div className="container mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#22D1F8] to-[#FF4EA3] text-transparent bg-clip-text"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 border-t border-gray-200 dark:border-[#22D1F8]/20 transition-colors duration-300">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src={logo || "/placeholder.svg"}
                alt="TruxPoint Logo"
                className="w-32 h-20 mb-4"
              />
              <p className="text-gray-600 dark:text-[#abc4ff] text-sm">
                This page exists purely to entertain, so don't take anything too
                seriously. We're professionals… we swear.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 dark:text-[#abc4ff] hover:text-[#22D1F8] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#how-to-buy"
                    className="text-gray-600 dark:text-[#abc4ff] hover:text-[#22D1F8] transition-colors"
                  >
                    How to Buy
                  </a>
                </li>
                <li>
                  <a
                    href="#tokenomics"
                    className="text-gray-600 dark:text-[#abc4ff] hover:text-[#22D1F8] transition-colors"
                  >
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-gray-600 dark:text-[#abc4ff] hover:text-[#22D1F8] transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-600 dark:text-[#abc4ff] hover:text-[#22D1F8] transition-colors"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-[#181F35] rounded-full hover:bg-[#22D1F8]/20 transition-colors"
                >
                  <img
                    src={telegram || "/placeholder.svg"}
                    alt="Telegram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-[#181F35] rounded-full hover:bg-[#22D1F8]/20 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
              <p className="mt-4 text-gray-600 dark:text-[#abc4ff] text-sm">
                Contract:{" "}
                <span className="text-[#22D1F8]">
                  {contract.substring(0, 6)}...
                  {contract.substring(contract.length - 4)}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-[#22D1F8]/20 text-center">
            <p className="text-gray-600 dark:text-[#abc4ff] text-sm">
              Copyright © {new Date().getFullYear()} TruxPoint. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
