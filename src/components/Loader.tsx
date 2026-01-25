
import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <Skeleton className="h-8 w-32" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-1/2" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-6 w-1/2" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-6 w-1/2" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-6 w-1/2" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 border-t">
        <div className="flex justify-center">
          <Skeleton className="h-6 w-1/4" />
        </div>
      </footer>
    </div>
  );
};

export default Loader;
