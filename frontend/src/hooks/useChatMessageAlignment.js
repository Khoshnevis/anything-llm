import { useState, useEffect, useCallback } from "react";
const ALIGNMENT_STORAGE_KEY = "anythingllm-chat-message-alignment";

/**
 * Store the message alignment in localStorage as well as provide a function to get the alignment of a message via role.
 * @returns {{msgDirection: 'left'|'left_right', setMsgDirection: (direction: string) => void, getMessageAlignment: (role: string) => string}} - The message direction and the class name for the direction.
 */
export function useChatMessageAlignment() {
  // NOTE: Alignment setting is intentionally disabled.
  // Default the alignment to left and ignore any toggles.
  const [msgDirection, setMsgDirection] = useState("left");

  // Persist a stable default (left) and comment out dynamic storage.
  useEffect(() => {
    try {
      localStorage.setItem(ALIGNMENT_STORAGE_KEY, "left");
    } catch (e) {
      // no-op
    }
  }, []);

  // Always return no alignment override (keeps messages left-aligned in current layout).
  const getMessageAlignment = useCallback(() => "", []);

  // --- Previous dynamic behavior (commented out by request) ---
  // const [msgDirection, setMsgDirection] = useState(
  //   () => localStorage.getItem(ALIGNMENT_STORAGE_KEY) ?? "left"
  // );
  // useEffect(() => {
  //   if (msgDirection) localStorage.setItem(ALIGNMENT_STORAGE_KEY, msgDirection);
  // }, [msgDirection]);
  // const getMessageAlignment = useCallback(
  //   (role) => {
  //     if (msgDirection !== "left_right") return "";
  //     const isRtl =
  //       typeof document !== "undefined" &&
  //       document?.documentElement?.getAttribute("dir") === "rtl";
  //     const shouldReverse = isRtl ? role === "assistant" : role === "user";
  //     return shouldReverse ? "flex-row-reverse" : "";
  //   },
  //   [msgDirection]
  // );

  return {
    msgDirection,
    setMsgDirection,
    getMessageAlignment,
  };
}
