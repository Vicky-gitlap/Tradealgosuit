"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tradealgosuite-settings";

type SettingsState = {
  fullName: string;
  email: string;
  renewalEmails: boolean;
  riskWarnings: boolean;
  reviewReminders: boolean;
  compactCards: boolean;
};

const defaultSettings: SettingsState = {
  fullName: "Wilberry Wils",
  email: "wilberry@example.com",
  renewalEmails: true,
  riskWarnings: true,
  reviewReminders: true,
  compactCards: true,
};

export function usePersistentSettings() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setSettings({ ...defaultSettings, ...JSON.parse(raw) });
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  }, [settings, ready]);

  return { settings, setSettings, ready };
}
