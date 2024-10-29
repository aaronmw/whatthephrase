import { useEffect, useRef } from 'react';

export function usePrevious<T extends unknown>(value: T) {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}