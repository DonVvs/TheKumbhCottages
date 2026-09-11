export function initClarity(projectId = 'ydlevz3pj0') {
  if (typeof window === 'undefined' || !projectId) return;
  try {
    // Dynamic Microsoft Clarity tag initialization
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", projectId);
  } catch (e) {
    // Graceful fallback
  }
}

export function trackClarityEvent(eventName) {
  try {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("event", eventName);
    }
  } catch (e) {}
}

export function setClarityTag(key, value) {
  try {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("set", key, value);
    }
  } catch (e) {}
}

export function upgradeClaritySession(reason) {
  try {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("upgrade", reason);
    }
  } catch (e) {}
}
