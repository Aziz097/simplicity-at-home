'use client';

import { useEffect, useState, createContext, useContext, ReactNode, useCallback } from 'react';
import { cn } from '@/lib/utils';

type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night';

interface AdaptiveLightingContextType {
  timeOfDay: TimeOfDay;
  colorIntensity: number;
}

const AdaptiveLightingContext = createContext<AdaptiveLightingContextType>({
  timeOfDay: 'afternoon',
  colorIntensity: 0,
});

export function useAdaptiveLighting() {
  return useContext(AdaptiveLightingContext);
}

interface AdaptiveLightingContainerProps {
  children: ReactNode;
  className?: string;
  enabled?: boolean;
}

export function AdaptiveLightingContainer({
  children,
  className,
  enabled = true,
}: AdaptiveLightingContainerProps) {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('afternoon');
  const [colorIntensity, setColorIntensity] = useState(0);
  const [mounted, setMounted] = useState(false);

  const getTimeOfDay = useCallback((): TimeOfDay => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 17) return 'afternoon';
    if (hour >= 17 && hour < 21) return 'evening';
    return 'night';
  }, []);

  const calculateColorIntensity = useCallback((tod: TimeOfDay): number => {
    switch (tod) {
      case 'morning': return 0.15;
      case 'afternoon': return 0;
      case 'evening': return 0.1;
      case 'night': return 0.25;
      default: return 0;
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!enabled || !mounted) return;

    const updateTimeOfDay = () => {
      const tod = getTimeOfDay();
      setTimeOfDay(tod);
      setColorIntensity(calculateColorIntensity(tod));
    };

    updateTimeOfDay();

    const interval = setInterval(updateTimeOfDay, 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [enabled, mounted, getTimeOfDay, calculateColorIntensity]);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <AdaptiveLightingContext.Provider value={{ timeOfDay, colorIntensity }}>
      <div className={cn('relative', className)}>
        {colorIntensity > 0 && (
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay z-10"
            aria-hidden="true"
            style={{
              background: `linear-gradient(
                to bottom,
                rgba(255, 248, 220, ${colorIntensity * 0.4}) 0%,
                transparent 40%,
                rgba(30, 20, 10, ${colorIntensity * 0.15}) 100%
              )`,
            }}
          />
        )}
        {children}
      </div>
    </AdaptiveLightingContext.Provider>
  );
}
