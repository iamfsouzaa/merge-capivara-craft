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
        <footer className="mt-20 text-center">
          <p className="text-sm text-muted-foreground">
            Feito com ♥ por{' '}
            <span className="font-semibold text-foreground">Capivarafy</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
