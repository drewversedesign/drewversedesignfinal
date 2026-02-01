
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
    </div>
  );
};

export default Loading;
