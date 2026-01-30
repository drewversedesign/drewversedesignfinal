import { Skeleton } from "./skeleton";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Skeleton className="h-12 w-12 rounded-full" />
    </div>
  );
};

export default Loading;
