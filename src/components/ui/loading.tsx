
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin" />
        <Loader2 className="h-6 w-6 text-orange-500 animate-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <p className="mt-4 text-white/60 font-mono text-sm uppercase tracking-widest animate-pulse">
        Loading DrewVerse
      </p>
    </div>
  );
};

export default Loading;
