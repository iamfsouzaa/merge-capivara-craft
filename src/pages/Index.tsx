import PDFMerger from '@/components/PDFMerger';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Ferramenta Gratuita
          </div>
          
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
      <div className="fixed bottom-0 left-0 right-0 bg-yellow-400 text-black py-3 overflow-hidden z-50">
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="mx-8">
            🚀 Acesse o Capivarafy.com - maior especialista em edital tecnova - Edital SC aberto R$200k para seu produto acesse aqui → 
            <a 
              href="https://www.capivarafy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold underline hover:no-underline ml-1"
            >
              www.capivarafy.com
            </a>
          </span>
          <span className="mx-8">
            🚀 Acesse o Capivarafy.com - maior especialista em edital tecnova - Edital SC aberto R$200k para seu produto acesse aqui → 
            <a 
              href="https://www.capivarafy.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold underline hover:no-underline ml-1"
            >
              www.capivarafy.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;
