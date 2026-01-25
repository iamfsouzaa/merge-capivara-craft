import PDFMerger from '@/components/PDFMerger';
import faceIllustration from '@/assets/face-illustration.png';
import sparkles from '@/assets/sparkles.png';

const Index = () => {
  return <div className="min-h-screen bg-background py-12 md:py-20 relative overflow-hidden">
      {/* Decorative illustrations */}
      <img 
        src={faceIllustration} 
        alt="" 
        className="absolute top-20 left-4 md:left-12 lg:left-24 w-16 md:w-24 lg:w-32 opacity-80 pointer-events-none animate-bounce-gentle"
        aria-hidden="true"
      />
      <img 
        src={sparkles} 
        alt="" 
        className="absolute top-12 right-8 md:right-16 lg:right-32 w-12 md:w-16 lg:w-20 opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <img 
        src={sparkles} 
        alt="" 
        className="absolute bottom-32 left-8 md:left-20 w-8 md:w-12 opacity-50 pointer-events-none rotate-45"
        aria-hidden="true"
      />
      <img 
        src={faceIllustration} 
        alt="" 
        className="absolute bottom-40 right-4 md:right-16 lg:right-28 w-14 md:w-20 lg:w-28 opacity-60 pointer-events-none scale-x-[-1]"
        aria-hidden="true"
      />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 px-4">
          
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Junte seus PDFs em um
            <br />
            <span className="text-primary">único arquivo</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto">
            Combine até 3 documentos PDF de forma rápida, segura e sem complicações.
          </p>
        </header>

        {/* PDF Merger Component */}
        <PDFMerger />

        {/* Footer */}
        <footer className="mt-20 text-center pb-16">
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