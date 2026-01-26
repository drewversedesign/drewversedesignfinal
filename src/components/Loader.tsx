import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <Skeleton className="h-8 w-32" />
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </header>
      <main className="flex-1 p-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-1/2" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </main>
      <footer className="p-4 border-t">
        <Skeleton className="h-6 w-48" />
      </footer>
    </div>
  );
};

export default Loader;
