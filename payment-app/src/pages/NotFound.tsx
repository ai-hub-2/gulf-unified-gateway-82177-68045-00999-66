import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
      <Card className="p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold mb-2">الصفحة غير موجودة</h1>
          <p className="text-muted-foreground">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
          </p>
        </div>
        
        <div className="space-y-3">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="w-full"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            العودة للخلف
          </Button>
          
          <Button
            onClick={() => window.location.href = '/'}
            className="w-full"
          >
            <Home className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;