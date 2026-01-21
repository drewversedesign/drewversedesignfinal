
import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header Skeleton */}
      <header className="flex items-center justify-between p-4 border-b">
        <Skeleton className="h-8 w-32" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </header>

      {/* Main Content Skeleton */}
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-1/2 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="p-4 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-4 w-1/4 mx-auto" />
        </div>
      </footer>
    </div>
  );
};

export default Loader;
