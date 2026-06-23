"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useTheme } from "next-themes";

type TelegramContextValue = {
  isTelegram: boolean;
  platform: string | null;
  initData: string | null;
  userId: number | null;
  expand: () => void;
};

const TelegramContext = createContext<TelegramContextValue>({
  isTelegram: false,
  platform: null,
  initData: null,
  userId: null,
  expand: () => {},
});

export function TelegramProvider({ children }: { children: ReactNode }) {
  const { setTheme } = useTheme();
  const [state, setState] = useState<Omit<TelegramContextValue, "expand">>({
    isTelegram: false,
    platform: null,
    initData: null,
    userId: null,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const WebApp = (await import("@twa-dev/sdk")).default;
        WebApp.ready();
        WebApp.expand();

        const tgTheme = WebApp.colorScheme;
        if (tgTheme === "dark" || tgTheme === "light") {
          setTheme(tgTheme);
        }

        WebApp.setHeaderColor(tgTheme === "dark" ? "#042f2e" : "#f9f6ef");
        WebApp.setBackgroundColor(tgTheme === "dark" ? "#042f2e" : "#f9f6ef");

        setState({
          isTelegram: true,
          platform: WebApp.platform,
          initData: WebApp.initData || null,
          userId: WebApp.initDataUnsafe?.user?.id ?? null,
        });
      } catch {
        const win = window as Window & { Telegram?: { WebApp?: { initData?: string } } };
        if (win.Telegram?.WebApp) {
          win.Telegram.WebApp.initData;
          setState({
            isTelegram: true,
            platform: "unknown",
            initData: win.Telegram.WebApp.initData ?? null,
            userId: null,
          });
        }
      }
    };

    init();
  }, [setTheme]);

  const expand = () => {
    import("@twa-dev/sdk").then(({ default: WebApp }) => WebApp.expand()).catch(() => {});
  };

  return (
    <TelegramContext.Provider value={{ ...state, expand }}>
      {children}
    </TelegramContext.Provider>
  );
}

export function useTelegram() {
  return useContext(TelegramContext);
}
