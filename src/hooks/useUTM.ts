import { useEffect } from 'react';

export interface UTMParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
}

export const useUTM = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const searchParams = new URLSearchParams(window.location.search);
    const utmKeys: (keyof UTMParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term'
    ];

    utmKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) {
        sessionStorage.setItem(key, value);
      }
    });
  }, []);

  const getUTMParams = (): UTMParams => {
    if (typeof window === 'undefined') {
      return { utm_source: null, utm_medium: null, utm_campaign: null, utm_content: null, utm_term: null };
    }
    return {
      utm_source: sessionStorage.getItem('utm_source'),
      utm_medium: sessionStorage.getItem('utm_medium'),
      utm_campaign: sessionStorage.getItem('utm_campaign'),
      utm_content: sessionStorage.getItem('utm_content'),
      utm_term: sessionStorage.getItem('utm_term'),
    };
  };

  return { getUTMParams };
};
