import { RefObject } from 'react';

interface Options {
  target: RefObject<HTMLElement>;
  threshold?: number;
  cacheKey: string;
}

function useInfiniteScroll(options: Options) {
  const { target } = options;
  const {} = useScroll(target);
}

export default useInfiniteScroll;
