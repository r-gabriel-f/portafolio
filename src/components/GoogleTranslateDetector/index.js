import { useEffect, useState } from 'react';

/**
 * A hook that detects if Google Translate is active and what language is being used
 * @returns {Object} { isTranslated: boolean, language: string }
 */
export const useGoogleTranslateDetector = () => {
  const [translationState, setTranslationState] = useState({
    isTranslated: false,
    language: 'en' // Default language
  });

  useEffect(() => {
    // Function to detect Google Translate
    const detectGoogleTranslate = () => {
      // Check for Google Translate elements
      const hasGTranslateElement = 
        document.querySelector('.goog-te-banner-frame') !== null ||
        document.querySelector('.skiptranslate') !== null ||
        document.querySelector('html[translated="1"]') !== null;

      // Check if the page language has been changed
      const htmlElement = document.documentElement;
      const htmlLang = htmlElement.lang || 'en';
      
      // Check if the content has been translated to Spanish
      // Google Translate often adds specific attributes or changes text content
      const isSpanish = 
        htmlLang.includes('es') || 
        document.body.textContent.includes('Descargar CV') || // "Download CV" in Spanish
        document.querySelector('button[label="Descargar CV"]') !== null;

      setTranslationState({
        isTranslated: hasGTranslateElement,
        language: isSpanish ? 'es' : 'en'
      });
    };

    // Initial detection
    detectGoogleTranslate();

    // Set up mutation observer to detect DOM changes
    const observer = new MutationObserver(detectGoogleTranslate);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return translationState;
};

export default useGoogleTranslateDetector;
