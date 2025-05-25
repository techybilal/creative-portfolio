
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InteriorDesigner from "./pages/InteriorDesigner";
import MakeupArtist from "./pages/MakeupArtist";
import FashionStylist from "./pages/FashionStylist";
import FitnessTrainer from "./pages/FitnessTrainer";
import Photographer from "./pages/Photographer";
import Writer from "./pages/Writer";
import EventPlanner from "./pages/EventPlanner";
import Chef from "./pages/Chef";
import LifeCoach from "./pages/LifeCoach";
import Artist from "./pages/Artist";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/interior-designer" element={<InteriorDesigner />} />
          <Route path="/makeup-artist" element={<MakeupArtist />} />
          <Route path="/fashion-stylist" element={<FashionStylist />} />
          <Route path="/fitness-trainer" element={<FitnessTrainer />} />
          <Route path="/photographer" element={<Photographer />} />
          <Route path="/writer" element={<Writer />} />
          <Route path="/event-planner" element={<EventPlanner />} />
          <Route path="/chef" element={<Chef />} />
          <Route path="/life-coach" element={<LifeCoach />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
