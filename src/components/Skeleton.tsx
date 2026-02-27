interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export default function Skeleton({ className = '', variant = 'rectangular' }: SkeletonProps) {
  const baseStyles = 'animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%]';
  
  const variantStyles = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`} />
  );
}

// Product Card Skeleton
export function ProductCardSkeleton() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
      <Skeleton className="aspect-square w-full" />
      <div className="p-6">
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-3" />
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-12" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Product List Skeleton
export function ProductListSkeleton() {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl flex">
      <Skeleton className="w-48 h-48 flex-shrink-0" />
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-7 w-2/3 mb-2" />
          <Skeleton className="h-4 w-full mb-3" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Skeleton className="h-9 w-24" />
          <Skeleton className="h-12 w-36 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// Testimonial Skeleton
export function TestimonialSkeleton() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
      <div className="flex items-center mb-6">
        <Skeleton variant="circular" className="w-16 h-16 mr-6" />
        <div className="flex-1">
          <Skeleton className="h-6 w-40 mb-2" />
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-5 w-full mb-2" />
      <Skeleton className="h-5 w-5/6" />
    </div>
  );
}

// Stats Card Skeleton
export function StatsCardSkeleton() {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center">
      <Skeleton variant="circular" className="w-16 h-16 mx-auto mb-4" />
      <Skeleton className="h-8 w-20 mx-auto mb-2" />
      <Skeleton className="h-4 w-32 mx-auto" />
    </div>
  );
}
