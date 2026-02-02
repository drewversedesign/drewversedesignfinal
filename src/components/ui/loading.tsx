
import { Loader2 } from "lucide-react";

/**
 * Reusable Loading component for Suspense fallbacks.
 * Uses a centered, animated spinner to indicate content is being loaded.
 */
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full">
      <Loader2 className="h-10 w-10 animate-spin text-orange-500" />
    </div>
  );
};

export default Loading;
