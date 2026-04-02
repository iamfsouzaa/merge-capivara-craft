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
            <a href="https://www.capivarafy.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">Capivarafy</a>
          </p>
        </footer>
      </div>

    </div>;
};
export default Index;