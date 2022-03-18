import { useRef } from "react";

export default function useDebounce() {
  const timeoutRef = useRef<any>(null);

  function debouncedFunc(func: Function, delay: number, ...args: any) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debouncedFunc;
}
