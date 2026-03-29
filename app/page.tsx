"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Search, 
  Menu, 
  ArrowRight, 
  Type, 
  Shapes, 
  UserRound, 
  Smile, 
  ImageIcon, 
  ArrowUpRight, 
  ChevronRight, 
  ArrowRightCircle,
  Copy
} from "lucide-react";

const convertText = (text: string, style: string) => {
  if (!text) return "Preview";
  switch (style) {
    case 'bold':
      return text.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119743);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119737);
        return c;
      }).join('');
    case 'italic':
      return text.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119795);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119789);
        return c;
      }).join('');
    case 'cursive':
      return text.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119951);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119945);
        return c;
      }).join('');
    case 'monospace':
      return text.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 120367);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 120361);
        return c;
      }).join('');
    case 'strikethrough':
      return text.split('').map(c => c + '\u0336').join('');
    case 'underline':
      return text.split('').map(c => c + '\u0332').join('');
    case 'upsideDown':
      const upsideDownMap: Record<string, string> = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ı', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
        'A': '∀', 'B': '𐐒', 'C': 'Ɔ', 'D': '◖', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': '⅁', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Ό', 'R': 'ᴚ', 'S': 'S', 'T': '⊥', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
      };
      return text.split('').reverse().map(c => upsideDownMap[c] || c).join('');
    case 'square':
      return text.split('').map(c => {
        const code = c.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 127247);
        return c;
      }).join('');
    case 'bubble':
      return text.split('').map(c => {
        const code = c.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 9333);
        if (code >= 49 && code <= 57) return String.fromCodePoint(code + 9263);
        if (code === 48) return '⓪';
        return c;
      }).join('');
    case 'zalgo':
      const zalgoUp = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0351', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b', '\u0346', '\u031a'];
      const zalgoDown = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'];
      const zalgoMid = ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0489'];
      return text.split('').map(c => {
        let newChar = c;
        for (let i = 0; i < 2; i++) newChar += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        for (let i = 0; i < 1; i++) newChar += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
        for (let i = 0; i < 2; i++) newChar += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
        return newChar;
      }).join('');
    default:
      return text;
  }
}

export default function Page() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-surface/80 backdrop-blur-md dark:bg-inverse-surface/80 sticky top-0 z-50 border-b border-surface-variant/50">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black tracking-tighter text-on-surface dark:text-surface font-headline">
            GLYPHY
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-primary font-bold border-b-2 border-primary pb-1 font-headline hover:text-secondary transition-colors duration-200">
              Font Generator
            </Link>
            <Link href="#" className="text-on-surface font-medium font-headline hover:text-secondary transition-colors duration-200">
              Cool Symbols
            </Link>
            <Link href="#" className="text-on-surface font-medium font-headline hover:text-secondary transition-colors duration-200">
              Name Generator
            </Link>
            <Link href="#" className="text-on-surface font-medium font-headline hover:text-secondary transition-colors duration-200">
              Emoticons
            </Link>
            <Link href="#" className="text-on-surface font-medium font-headline hover:text-secondary transition-colors duration-200">
              PFP Maker
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-on-surface hover:text-primary transition-colors">
              <Search className="w-6 h-6" />
            </button>
            <button className="md:hidden text-on-surface">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section: Colorful Bands */}
        <section className="flex flex-col md:flex-row h-auto md:h-[600px] overflow-hidden">
          {/* Font Generator Band */}
          <div className="bg-primary-container p-8 flex flex-col justify-between items-start transition-all duration-500 ease-out flex-1 hover:flex-[1.2] group relative min-h-[300px] overflow-hidden">
            <div className="z-10">
              <h2 className="font-headline text-4xl font-black text-on-primary-container leading-tight mb-4">Font Generator</h2>
              <p className="text-on-primary-container/80 text-sm font-semibold tracking-wide">CUSTOMIZE YOUR TEXT</p>
            </div>
            <button className="bg-inverse-surface text-surface px-6 py-3 rounded-full font-bold flex items-center gap-2 scale-100 group-hover:scale-105 transition-transform z-10">
              Try Now <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 right-4 opacity-10 scale-150 rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-[1.7] group-hover:rotate-6">
              <Type className="w-32 h-32 text-on-primary-container" />
            </div>
          </div>

          {/* Cool Symbols Band */}
          <div className="bg-secondary-container p-8 flex flex-col justify-between items-start transition-all duration-500 ease-out flex-1 hover:flex-[1.2] group relative min-h-[300px] overflow-hidden">
            <div className="z-10">
              <h2 className="font-headline text-4xl font-black text-on-secondary-container leading-tight mb-4">Cool Symbols</h2>
              <p className="text-on-secondary-container/80 text-sm font-semibold tracking-wide">RARE & UNIQUE ICONS</p>
            </div>
            <button className="bg-inverse-surface text-surface px-6 py-3 rounded-full font-bold flex items-center gap-2 scale-100 group-hover:scale-105 transition-transform z-10">
              Try Now <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 right-4 opacity-10 scale-150 -rotate-12 pointer-events-none transition-transform duration-500 group-hover:scale-[1.7] group-hover:-rotate-6">
              <Shapes className="w-32 h-32 text-on-secondary-container" />
            </div>
          </div>

          {/* Name Generator Band */}
          <div className="bg-error-container p-8 flex flex-col justify-between items-start transition-all duration-500 ease-out flex-1 hover:flex-[1.2] group relative min-h-[300px] overflow-hidden">
            <div className="z-10">
              <h2 className="font-headline text-4xl font-black text-on-error-container leading-tight mb-4">Name Generator</h2>
              <p className="text-on-error-container/80 text-sm font-semibold tracking-wide">GAMER & SOCIAL TAGS</p>
            </div>
            <button className="bg-inverse-surface text-surface px-6 py-3 rounded-full font-bold flex items-center gap-2 scale-100 group-hover:scale-105 transition-transform z-10">
              Try Now <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 right-4 opacity-10 scale-150 rotate-6 pointer-events-none transition-transform duration-500 group-hover:scale-[1.7] group-hover:rotate-12">
              <UserRound className="w-32 h-32 text-on-error-container" />
            </div>
          </div>

          {/* Emoticons Band */}
          <div className="bg-tertiary-container p-8 flex flex-col justify-between items-start transition-all duration-500 ease-out flex-1 hover:flex-[1.2] group relative min-h-[300px] overflow-hidden">
            <div className="z-10">
              <h2 className="font-headline text-4xl font-black text-on-tertiary-container leading-tight mb-4">Emoticons</h2>
              <p className="text-on-tertiary-container/80 text-sm font-semibold tracking-wide">KAOMOI & TEXT FACES</p>
            </div>
            <button className="bg-inverse-surface text-surface px-6 py-3 rounded-full font-bold flex items-center gap-2 scale-100 group-hover:scale-105 transition-transform z-10">
              Try Now <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 right-4 opacity-10 scale-150 -rotate-6 pointer-events-none transition-transform duration-500 group-hover:scale-[1.7] group-hover:-rotate-12">
              <Smile className="w-32 h-32 text-on-tertiary-container" />
            </div>
          </div>

          {/* PFP Maker Band */}
          <div className="bg-tertiary p-8 flex flex-col justify-between items-start transition-all duration-500 ease-out flex-1 hover:flex-[1.2] group relative min-h-[300px] overflow-hidden">
            <div className="z-10">
              <h2 className="font-headline text-4xl font-black text-on-tertiary leading-tight mb-4">PFP Maker</h2>
              <p className="text-on-tertiary/80 text-sm font-semibold tracking-wide">AVATARS & BORDERS</p>
            </div>
            <button className="bg-surface text-inverse-surface px-6 py-3 rounded-full font-bold flex items-center gap-2 scale-100 group-hover:scale-105 transition-transform z-10">
              Try Now <ArrowRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 right-4 opacity-10 scale-150 rotate-45 pointer-events-none transition-transform duration-500 group-hover:scale-[1.7] group-hover:rotate-[55deg]">
              <ImageIcon className="w-32 h-32 text-on-tertiary" />
            </div>
          </div>
        </section>

        {/* Real-time Font Generator */}
        <section className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h3 className="font-headline text-5xl font-black tracking-tight mb-6">REAL-TIME FONT GENERATOR</h3>
            <p className="text-on-surface-variant font-medium text-lg leading-relaxed mb-8">
              Type your text below and watch it instantly transform into dozens of cool styles.
            </p>
            <div className="relative">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your text here..." 
                className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary text-on-surface rounded-2xl px-8 py-6 text-xl outline-none transition-all shadow-sm"
              />
              <Type className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-on-surface-variant/50" />
            </div>
          </div>

          {inputText && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Bold", style: "bold" },
                { name: "Italic", style: "italic" },
                { name: "Cursive", style: "cursive" },
                { name: "Monospace", style: "monospace" },
                { name: "Strikethrough", style: "strikethrough" },
                { name: "Underline", style: "underline" },
                { name: "Upside Down", style: "upsideDown" },
                { name: "Square", style: "square" },
                { name: "Bubble", style: "bubble" },
                { name: "Zalgo", style: "zalgo" },
              ].map((font) => (
                <div key={font.name} className="bg-surface-container-lowest border border-black/5 p-6 rounded-2xl flex justify-between items-center group hover:border-primary/30 transition-colors">
                  <div className="overflow-hidden mr-4">
                    <p className="text-xs font-bold text-on-surface-variant/50 uppercase tracking-wider mb-2">{font.name}</p>
                    <p className="text-xl text-on-surface truncate">{convertText(inputText, font.style)}</p>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(convertText(inputText, font.style))}
                    className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Popular Font Generators */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant/50 mb-2">フォント</p>
              <h3 className="font-headline text-5xl font-black tracking-tight mb-2">POPULAR FONT GENERATORS</h3>
              <div className="h-2 w-32 bg-primary"></div>
            </div>
            <button className="text-primary font-bold flex items-center gap-1 hover:underline group">
              View All <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            {/* Instagram */}
            <div className="md:col-span-2 bg-[#0a0a0a] text-white p-8 rounded-[2rem] min-h-[320px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-xs text-white/50">Font Generator</span>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                  VIEW <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-6xl md:text-7xl font-headline tracking-tight">Iηsтαgяαм</p>
              </div>
              <div>
                <span className="font-mono text-xs text-white/50">Instagram Fonts</span>
              </div>
            </div>

            {/* Glitch */}
            <div className="md:col-span-1 bg-[#fcfbf8] border border-black/5 text-[#0a0a0a] p-8 rounded-[2rem] min-h-[320px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-xs text-black/40">Font Generator</span>
                <button className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                  VIEW <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-5xl font-headline tracking-tighter">G̷L̷I̷T̷C̷H̷</p>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40">Glitch Text</span>
              </div>
            </div>

            {/* Fancy */}
            <div className="md:col-span-1 bg-[#0a0a0a] text-white p-8 rounded-[2rem] min-h-[320px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-xs text-white/50">Font Generator</span>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                  VIEW <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-5xl font-headline italic">𝐹𝑎𝑛𝑐𝑦</p>
              </div>
              <div>
                <span className="font-mono text-xs text-white/50">Fancy Text</span>
              </div>
            </div>

            {/* Discord */}
            <div className="md:col-span-1 bg-[#fcfbf8] border border-black/5 text-[#0a0a0a] p-8 rounded-[2rem] min-h-[320px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-xs text-black/40">Font Generator</span>
                <button className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                  VIEW <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-5xl font-headline tracking-tighter">D I S C Θ R D</p>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40">Discord Fonts</span>
              </div>
            </div>

            {/* Zalgo */}
            <div className="md:col-span-1 bg-[#0a0a0a] text-white p-8 rounded-[2rem] min-h-[320px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-xs text-white/50">Font Generator</span>
                <button className="bg-white text-black px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                  VIEW <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-5xl font-headline leading-[0.8] tracking-widest">Z̵a̷l̶g̷o̵</p>
              </div>
              <div>
                <span className="font-mono text-xs text-white/50">Zalgo Text</span>
              </div>
            </div>

            {/* Stylish */}
            <div className="md:col-span-2 bg-[#fcfbf8] border border-black/5 text-[#0a0a0a] p-8 rounded-[2rem] min-h-[320px] flex flex-col justify-between group cursor-pointer transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start w-full">
                <span className="font-mono text-xs text-black/40">Font Generator</span>
                <button className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 uppercase tracking-wider">
                  VIEW <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-6xl md:text-7xl font-headline">SƬYᄂIƧH</p>
              </div>
              <div>
                <span className="font-mono text-xs text-black/40">Stylish Text</span>
              </div>
            </div>
          </div>

          {/* Secondary List of Text Styles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-12 pt-16">
            {[
              { name: "Cursed Text", display: "C̷u̷r̷s̷e̷d̷ T̷e̷x̷t̷" },
              { name: "Square Text", display: "🄲🄾🄾🄻 🅃🄴🅇🅃" },
              { name: "Weird Text", display: "ẘ℮їґⅾ ☂℮ϰ☂" },
              { name: "Creepy Text", display: "C̷r̷e̷e̷p̷y̷ T̷e̷x̷t̷" },
              { name: "Small Text", display: "sᴍᴀʟʟ ᴛᴇxᴛ" },
              { name: "Bold Text", display: "𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭" },
              { name: "Italic Text", display: "𝐼𝑡𝑎𝑙𝑖𝑐 𝑇𝑒𝑥𝑡" },
              { name: "Underline Text", display: "U̲n̲d̲e̲r̲l̲i̲n̲e̲ T̲e̲x̲t̲" },
              { name: "Cursive Text", display: "𝓒𝓾𝓻𝓼𝓲𝓿𝓮 𝓣𝓮𝔁𝓽" },
              { name: "Strikethrough Text", display: "S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ T̶e̶x̶t̶" },
              { name: "Big Text", display: "B I G  T E X T" },
              { name: "Upside Down Text", display: "Uʍop ǝpısdn" },
              { name: "Twitter Fonts", display: "𝕋𝕨𝕚𝕥𝕥𝕖𝕣 𝔽𝕠𝕟𝕥𝕤" },
              { name: "Vaporwave", display: "𝕍𝕒𝕡𝕠𝕣𝕨𝕒𝕧𝕖 𝔽𝕠𝕟𝕥𝕤" },
              { name: "Tiktok Fonts", display: "tiktøk fōnts" },
              { name: "Facebook Fonts", display: "Fａｃｅｂｏｏｋ Fｏｎｔｓ" }
            ].map((style) => (
              <Link key={style.name} href="#" className="flex justify-between items-center group border-b border-black/10 pb-4">
                <span className="text-xl text-on-surface group-hover:text-primary transition-colors">{style.display}</span>
                <div className="w-6 h-6 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse Cool Symbols */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant/50 mb-2">シンボル</p>
              <h3 className="font-headline text-6xl font-black tracking-tight mb-6">BROWSE COOL SYMBOLS</h3>
              <p className="text-on-surface-variant max-w-2xl mx-auto font-medium text-lg leading-relaxed">
                Instantly copy and paste thousands of unique symbols for social media, gaming, and creative projects.
              </p>
            </div>

            {/* Large Symbol Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-16 gap-2 mb-20 bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm">
              {[
                "↖", "↗", "↘", "↙", "↑", "↓", "↔", "↕", "↩", "↪", "↰", "↱", "↲", "↳", "↺", "↻",
                "⇦", "⇧", "⇨", "⇩", "✓", "✗", "☑", "☒", "□", "◇", "▭", "▱", "◀", "▲", "▶", "▼",
                "©", "®", "℗", "™", "℠", "℡", "№", "§", "℁", "℀", "✆", "✇", "✃", "✎", "✐", "✑",
                "½", "⅓", "¼", "⅕", "⅛", "⅔", "¾", "+", "−", "×", "÷", "±", "≠", "≈", "≤", "≥",
                "₿", "Ξ", "Ł", "Ð", "ꜩ", "$", "¢", "€", "£", "₱", "¥", "₹", "₩", "₽", "﷼", "💱",
                "❂", "❍", "⚆", "⦼", "〄", "〶", "㉿", "⎋", "♽", "☢", "♔", "♘", "♙", "♕", "♖", "♝",
                "℃", "℉", "☼", "☽", "☾", "❅", "❀", "✿", "❁", "꧁", "꧂", "ꕥ", "❋", "✼", "❃", "❉",
                "☻", "☹", "⍢", "㋡", "❤️", "❤", "❣", "❥", "♪", "♫", "♬", "🎶", "♛", "♕", "♚", "♔",
                "♧", "♢", "♡", "♤", "★", "✪", "✯", "⋆", "⁂", "✦", "✶", "✧", "☆", "✰", "✢", "✤"
              ].map((sym, i) => (
                <button 
                  key={i} 
                  className="aspect-square flex items-center justify-center text-xl hover:bg-primary-container hover:text-on-primary-fixed rounded-xl transition-all hover:scale-110 active:scale-95"
                >
                  {sym}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
              {[
                "➵ Arrows Symbols", "฿ Currency Symbols", "☾ Astrology Symbols", "☆ Stars Symbols",
                "♡ Hearts Symbols", "❀ Flowers Symbols", "❅ Weather Symbols", "© Business Symbols",
                "℉ Units Symbols", "? Punctuation Symbols", "+ Math Symbols", "⅓ Numbers Symbols"
              ].map((category) => (
                <Link key={category} href="#" className="flex justify-between items-center group">
                  <span className="font-headline text-lg font-bold group-hover:text-primary transition-colors">{category}</span>
                  <ArrowRightCircle className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Find Stylish Usernames Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant/50 mb-2">ユーザー名</p>
            <h3 className="font-headline text-5xl font-black tracking-tight mb-4">FIND STYLISH USERNAMES</h3>
          </div>

          <div className="space-y-6 mb-20">
            {/* Username Card: Aesthetic */}
            <div className="bg-inverse-surface rounded-[2rem] p-10 flex flex-col justify-between h-[280px] overflow-hidden relative group cursor-pointer">
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-surface/40 uppercase tracking-widest">Name Generator</span>
                  <button className="bg-surface/10 hover:bg-surface/20 text-surface text-[10px] px-4 py-2 rounded-full flex items-center gap-1 font-bold uppercase transition-colors">
                    TRY NOW <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <h4 className="text-surface font-body text-5xl font-black mb-2 tracking-tight">@aesthetic</h4>
                <p className="text-surface/40 font-bold text-sm">Aesthetic Names</p>
              </div>
              <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:scale-110 transition-transform duration-700 ease-out">
                <Image 
                  alt="abstract icon" 
                  width={320}
                  height={320}
                  className="object-contain grayscale invert" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4uWvPekwIvPJIU7Q9h_QlFYFmNxgcZ401nP1tyE0Jq7OeroG-vir33BYJ7jU9HlpEuZgfS-K7nAWEcJKVxZNtZkPSyVUgmsCKI_7a1-o8XIKFDNEDf5oq257sjHnYvKNAbKVz6Hxw1fqwI_HWnNBtlmvGABiBjkrMXCaEC9JPCZYPGKGZF5u0F1o83-3QIZFvjIZW9bANwVccWEGw3WhSzE88Osl1bIHyhS_ZK9Zo0hBrtWUmQmlDtjoQUA6p_lAX80xztzn6ylw1"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Username Card: Discord */}
            <div className="bg-surface-container-low rounded-[2rem] p-10 flex flex-col justify-between h-[280px] overflow-hidden relative group cursor-pointer transition-all hover:bg-surface-container">
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">Name Generator</span>
                  <button className="bg-inverse-surface text-surface text-[10px] px-4 py-2 rounded-full flex items-center gap-1 font-bold uppercase transition-transform group-hover:scale-105">
                    TRY NOW <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <h4 className="text-on-surface font-body text-5xl font-black mb-2 tracking-tight">@discord</h4>
                <p className="text-on-surface/40 font-bold text-sm">Discord Names</p>
              </div>
            </div>

            {/* Username Card: Cool */}
            <div className="bg-inverse-surface rounded-[2rem] p-10 flex flex-col justify-between h-[280px] overflow-hidden relative group cursor-pointer">
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-surface/40 uppercase tracking-widest">Name Generator</span>
                  <button className="bg-surface/10 hover:bg-surface/20 text-surface text-[10px] px-4 py-2 rounded-full flex items-center gap-1 font-bold uppercase transition-colors">
                    TRY NOW <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <h4 className="text-surface font-body text-5xl font-black mb-2 tracking-tight">@cool</h4>
                <p className="text-surface/40 font-bold text-sm">Cool Names</p>
              </div>
            </div>

            {/* Username Card: Instagram */}
            <div className="bg-surface-container-low rounded-[2rem] p-10 flex flex-col justify-between h-[280px] overflow-hidden relative group cursor-pointer transition-all hover:bg-surface-container">
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-bold text-on-surface/40 uppercase tracking-widest">Name Generator</span>
                  <button className="bg-inverse-surface text-surface text-[10px] px-4 py-2 rounded-full flex items-center gap-1 font-bold uppercase transition-transform group-hover:scale-105">
                    TRY NOW <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <h4 className="text-on-surface font-body text-5xl font-black mb-2 tracking-tight">@instagram</h4>
                <p className="text-on-surface/40 font-bold text-sm">Instagram Names</p>
              </div>
            </div>
          </div>

          {/* Links Grid for Usernames */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
            {[
              "TikTok Names", "Cute Names", "Twitter Names", "Minecraft Names",
              "YouTube Names", "Soft Names", "Roblox Names", "Twitch Names"
            ].map((name) => (
              <Link key={name} href="#" className="flex justify-between items-center group">
                <span className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{name}</span>
                <ArrowRightCircle className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* Emoticons for Everything */}
        <section className="bg-surface-container-low py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-on-surface-variant/50 mb-2">顔文字</p>
              <h3 className="font-headline text-5xl font-black tracking-tight mb-4">EMOTICONS FOR EVERYTHING</h3>
            </div>

            {/* Large Diverse Kaomoji Collection */}
            <div className="flex flex-wrap justify-center gap-4 mb-24">
              {[
                "( ͡° ͜ʖ ͡°)", "¯\\_(ツ)_/¯", "(╯°□°）╯︵ ┻━┻", "( ͡~ ͜ʖ ͡°)", "(▀̿Ĺ̯▀̿ ̿)",
                "^ↀᴥↀ^", "UwU", "(✿^‿^)", "凸(⊙_⊙)凸", "(^_^)／", "ʕ•ᴥ•ʔ", "(/^-^(^ ^*)/",
                "(♥_♥)", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "( ͡⊙ ͜ʖ ͡⊙)", "(╥﹏╥)", "ᕙ(⇀‸↼‶)ᕗ", "( ˘ ³˘)♥",
                "(T_T)", "(=^･ω･^=)", "—==ΞΞΣ(っ°Д°っ)", "ᕕ( ᐛ )ᕗ", "(づ￣ ³￣)づ", "( ఠ ͟ʖ ఠ)", "凸( `△´ +)"
              ].map((emo, i) => (
                <button 
                  key={i}
                  className="bg-surface-container-lowest px-6 py-4 rounded-full hover:bg-tertiary-container hover:text-on-tertiary-container transition-all font-bold text-lg font-body shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0"
                >
                  {emo}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12">
              {[
                { label: "( ͡° ͜ʖ ͡°) Lenny Faces" },
                { label: "(★ ω ★) Cute" },
                { label: "¯\\_(ツ)_/¯ Shrug" },
                { label: "(^‿^) Flirting" },
                { label: "(╬ ಠ益ಠ) Angry" },
                { label: "ヽ༼ຈل͜ຈ༽ﾉ Dongers" },
                { label: "ʕ•ᴥ•ʔ Bears" },
                { label: "(╥﹏╥) Sad" },
                { label: "(=^･ω･^=" }
              ].map((item, i) => (
                <Link key={i} href="#" className="flex justify-between items-center group">
                  <span className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{item.label}</span>
                  <ArrowRightCircle className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
