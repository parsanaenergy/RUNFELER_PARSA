export interface GoftinoUser {
  name?: string;
  email?: string;
  phone?: string;
  about?: string;
  avatar?: string;
  tags?: string;
  metadata?: Array<{ key: string; value: string }>;
  forceUpdate?: boolean;
}

declare global {
  interface Window {
    isGoftinoAdded?: number;
    Goftino?: {
      setUser: (data: GoftinoUser) => void;
      open: () => void;
      close: () => void;
      toggle: () => void;
      getUserId: () => string;
      setUserId: (id: string, cb?: (res: { status: string }) => void) => void;
    };
  }
}

const WIDGET_ID = "6F7Nxr";

export function loadGoftinoScript(): void {
  if (typeof window === "undefined" || window.isGoftinoAdded) return;
  window.isGoftinoAdded = 1;
  const d = document;
  const g = d.createElement("script");
  const s = `https://www.goftino.com/widget/${WIDGET_ID}`;
  const l = localStorage.getItem(`goftino_${WIDGET_ID}`);
  g.type = "text/javascript";
  g.async = true;
  g.src = l ? `${s}?o=${l}` : s;
  const head = d.getElementsByTagName("head")[0];
  if (head) {
    head.appendChild(g);
  }
}

export function openGoftinoChat(): void {
  if (typeof window === "undefined") return;
  if (window.Goftino) {
    window.Goftino.open();
  } else {
    loadGoftinoScript();
    const openOnReady = () => {
      window.Goftino?.open();
      window.removeEventListener("goftino_ready", openOnReady);
    };
    window.addEventListener("goftino_ready", openOnReady);
  }
}

export function setUserGoftino(user: GoftinoUser): void {
  if (typeof window === "undefined") return;
  if (window.Goftino) {
    window.Goftino.setUser(user);
  } else {
    loadGoftinoScript();
    const setOnReady = () => {
      window.Goftino?.setUser(user);
      window.removeEventListener("goftino_ready", setOnReady);
    };
    window.addEventListener("goftino_ready", setOnReady);
  }
}
