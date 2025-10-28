import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { QrCode, Download, X } from "lucide-react";

interface QRCodeGeneratorProps {
  url: string;
  title?: string;
  className?: string;
}

const QRCodeGenerator = ({ url, title = "QR Code", className = "" }: QRCodeGeneratorProps) => {
  const [showQR, setShowQR] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    if (showQR && url) {
      // Generate QR code using qr-server.com API
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}`;
      setQrCodeUrl(qrUrl);
    }
  }, [showQR, url]);

  const handleDownload = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = `qr-code-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!showQR) {
    return (
      <Button
        variant="outline"
        onClick={() => setShowQR(true)}
        className={className}
      >
        <QrCode className="w-4 h-4 ml-2" />
        <span className="text-sm">QR Code</span>
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="p-6 max-w-sm w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowQR(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="text-center">
          {qrCodeUrl && (
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="mx-auto mb-4 border rounded"
            />
          )}
          
          <p className="text-sm text-muted-foreground mb-4 break-all">
            {url}
          </p>
          
          <div className="flex gap-2">
            <Button
              onClick={handleDownload}
              className="flex-1"
            >
              <Download className="w-4 h-4 ml-2" />
              تحميل
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setShowQR(false)}
              className="flex-1"
            >
              إغلاق
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QRCodeGenerator;