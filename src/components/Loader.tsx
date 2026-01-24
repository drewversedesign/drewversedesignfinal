import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  );
};

export default Loader;
