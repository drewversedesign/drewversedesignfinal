
import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="grid h-full w-full grid-cols-12 grid-rows-6 gap-4 p-4">
        {/* Sidebar */}
        <Skeleton className="col-span-2 row-span-6 h-full" />

        <div className="col-span-10 row-span-6 grid grid-cols-12 grid-rows-6 gap-4">
          {/* Header */}
          <Skeleton className="col-span-12 h-full" />

          {/* Main Content Area */}
          <Skeleton className="col-span-8 row-span-4 h-full" />

          {/* Side Content */}
          <Skeleton className="col-span-4 row-span-4 h-full" />

          {/* Footer */}
          <Skeleton className="col-span-12 h-full" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
