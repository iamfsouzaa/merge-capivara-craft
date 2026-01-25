import { useState, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { FileUp, X, FileText, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import capivarafyLogo from '@/assets/capivarafy-logo.png';

interface PDFFile {
  file: File;
  id: string;
}

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
};

const PDFMerger = () => {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const addFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;

    const pdfFiles = Array.from(newFiles).filter(
      (file) => file.type === 'application/pdf'
    );

    if (pdfFiles.length === 0) {
      toast({
        title: 'Arquivo inválido',
        description: 'Por favor, selecione apenas arquivos PDF.',
        variant: 'destructive',
      });
      return;
    }

    const remainingSlots = 3 - files.length;
    if (remainingSlots <= 0) {
      toast({
        title: 'Limite atingido',
        description: 'Você pode adicionar no máximo 3 arquivos.',
        variant: 'destructive',
      });
      return;
    }

    const filesToAdd = pdfFiles.slice(0, remainingSlots).map((file) => ({
      file,
      id: crypto.randomUUID(),
    }));

    if (pdfFiles.length > remainingSlots) {
      toast({
        title: 'Alguns arquivos não foram adicionados',
        description: `Limite de 3 arquivos. Apenas ${remainingSlots} arquivo(s) adicionado(s).`,
      });
    }

    setFiles((prev) => [...prev, ...filesToAdd]);
  }, [files.length]);

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    e.target.value = '';
  };

  const mergePDFs = async () => {
    if (files.length < 2) return;

    setIsProcessing(true);

    try {
      // Wait 5 seconds with loading animation
      await new Promise(resolve => setTimeout(resolve, 5000));

      const mergedPdf = await PDFDocument.create();

      for (const { file } of files) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();
      const blob = new Blob([new Uint8Array(mergedPdfBytes)], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'documento-final-capivarafy.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: 'Pronto!',
        description: 'Seu PDF foi gerado com sucesso.',
      });

      setFiles([]);
    } catch (error) {
      console.error('Erro ao mesclar PDFs:', error);
      toast({
        title: 'Erro ao processar',
        description: 'Ocorreu um erro ao mesclar os PDFs. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const canMerge = files.length >= 2;

  // Loading overlay
  if (isProcessing) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative mb-8">
            <img 
              src={capivarafyLogo} 
              alt="Capivarafy" 
              className="w-24 h-24 object-contain animate-bounce-gentle"
            />
          </div>
          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-foreground animate-pulse-fade">
              Capivarafy
            </p>
            <p className="text-base md:text-lg text-muted-foreground animate-pulse-fade animation-delay-300">
              O maior especialista de edital tecnova do Brasil
            </p>
            <p className="text-sm text-muted-foreground animate-pulse-fade animation-delay-600">
              Aguarde seu documento...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Upload Area */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative overflow-hidden transition-all duration-300 ease-out
          rounded-2xl p-8 md:p-12
          bg-card border-2 border-dashed
          ${isDragging 
            ? 'border-primary bg-primary/5 scale-[1.02]' 
            : 'border-border hover:border-primary/50'
          }
          soft-shadow
        `}
      >
        <input
          type="file"
          accept=".pdf,application/pdf"
          multiple
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          disabled={files.length >= 3 || isProcessing}
        />
        
        <div className="flex flex-col items-center justify-center text-center pointer-events-none">
          <div className={`
            w-16 h-16 rounded-2xl flex items-center justify-center mb-4
            bg-primary/10 transition-transform duration-300
            ${isDragging ? 'scale-110' : ''}
          `}>
            <FileUp className="w-8 h-8 text-primary" />
          </div>
          
          <p className="text-lg font-medium text-foreground mb-2">
            {files.length >= 3 
              ? 'Limite de arquivos atingido'
              : 'Arraste seus PDFs aqui'
            }
          </p>
          <p className="text-sm text-muted-foreground">
            {files.length >= 3 
              ? 'Remova um arquivo para adicionar outro'
              : 'ou clique para selecionar (máx. 3 arquivos)'
            }
          </p>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((pdfFile, index) => (
            <div
              key={pdfFile.id}
              className="
                flex items-center gap-4 p-4 rounded-xl
                bg-card soft-shadow
                animate-in fade-in slide-in-from-bottom-2 duration-300
              "
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {pdfFile.file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatFileSize(pdfFile.file.size)}
                </p>
              </div>
              
              <button
                onClick={() => removeFile(pdfFile.id)}
                disabled={isProcessing}
                className="
                  w-8 h-8 rounded-lg flex items-center justify-center
                  text-muted-foreground hover:text-destructive hover:bg-destructive/10
                  transition-colors duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
                aria-label="Remover arquivo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Status Message */}
      {files.length > 0 && files.length < 2 && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="w-4 h-4" />
          <span>Adicione pelo menos mais {2 - files.length} arquivo(s)</span>
        </div>
      )}

      {/* Action Button */}
      <div className="mt-8">
        <Button
          onClick={mergePDFs}
          disabled={!canMerge || isProcessing}
          className="w-full h-14 text-base font-semibold rounded-xl transition-all duration-300"
          size="lg"
        >
          <CheckCircle2 className="w-5 h-5 mr-2" />
          Gerar PDF Único
        </Button>
      </div>

      {/* Privacy Note */}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        🔒 Seus arquivos são processados localmente no navegador.
        <br />
        Nenhum dado é enviado para servidores externos.
      </p>
    </div>
  );
};

export default PDFMerger;
