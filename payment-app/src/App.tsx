import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentRecipient from "./pages/PaymentRecipient";
import PaymentDetails from "./pages/PaymentDetails";
import PaymentCardForm from "./pages/PaymentCardForm";
import PaymentOTPForm from "./pages/PaymentOTPForm";
import PaymentReceiptPage from "./pages/PaymentReceiptPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/pay/:id/recipient" element={<PaymentRecipient />} />
          <Route path="/pay/:id/details" element={<PaymentDetails />} />
          <Route path="/pay/:id/card" element={<PaymentCardForm />} />
          <Route path="/pay/:id/otp" element={<PaymentOTPForm />} />
          <Route path="/pay/:id/receipt" element={<PaymentReceiptPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;