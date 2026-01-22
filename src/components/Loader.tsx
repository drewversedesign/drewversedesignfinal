import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <Skeleton className="h-8 w-32" />
        <nav className="flex items-center space-x-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </nav>
      </header>
      <main className="flex-1 p-8">
        <div className="space-y-4">
          <Skeleton className="h-12 w-1/2" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-3/4" />
        </div>
      </main>
    </div>
  );
};

export default Loader;
