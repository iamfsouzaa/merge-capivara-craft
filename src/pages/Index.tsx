import PDFMerger from '@/components/PDFMerger';
import sparkles from '@/assets/sparkles.png';
const Index = () => {
  return <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 px-4 relative">
          <img src={sparkles} alt="" className="absolute -top-4 -left-4 md:left-8 w-10 md:w-14 opacity-80" aria-hidden="true" />
          <img src={sparkles} alt="" className="absolute -top-2 -right-4 md:right-8 w-8 md:w-12 opacity-70 rotate-45" aria-hidden="true" />
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Junte seus PDFs em um
            <br />
            <span className="text-primary">único arquivo</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto">Combine .PDF's com o poder da IA </p>
        </header>

        {/* PDF Merger Component */}
        <PDFMerger />

        {/* Footer */}
        <footer className="mt-20 text-center pb-16 relative">
          <img src={sparkles} alt="" className="absolute top-0 left-1/4 w-8 md:w-10 opacity-60" aria-hidden="true" />
          <img src={sparkles} alt="" className="absolute -top-2 right-1/4 w-6 md:w-8 opacity-50 -rotate-12" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            Feito com ♥ por{' '}
            <span className="font-semibold text-foreground">Capivarafy</span>
          </p>
        </footer>
      </div>

      {/* Scrolling Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-black py-3 overflow-hidden z-50 group cursor-pointer">
        <div className="animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap inline-block">
          <span className="mx-8">
            🚀 Acesse o Capivarafy.com - maior especialista em edital tecnova - Edital SC aberto R$200k para seu produto acesse aqui → 
            <a href="https://www.capivarafy.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:no-underline ml-1">
              www.capivarafy.com
            </a>
          </span>
          <span className="mx-8">
            🚀 Acesse o Capivarafy.com - maior especialista em edital tecnova - Edital SC aberto R$200k para seu produto acesse aqui → 
            <a href="https://www.capivarafy.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:no-underline ml-1">
              www.capivarafy.com
            </a>
          </span>
        </div>
      </div>
    </div>;
};
export default Index;