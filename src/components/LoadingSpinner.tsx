// src/components/LoadingSpinner.tsx
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center" style={{ height: 'calc(100vh - 200px)' }}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
