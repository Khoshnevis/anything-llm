import { useState, useEffect, useCallback } from "react";
const ALIGNMENT_STORAGE_KEY = "anythingllm-chat-message-alignment";

/**
 * Store the message alignment in localStorage as well as provide a function to get the alignment of a message via role.
 * @returns {{msgDirection: 'left'|'left_right', setMsgDirection: (direction: string) => void, getMessageAlignment: (role: string) => string}} - The message direction and the class name for the direction.
 */
export function useChatMessageAlignment() {
  const [msgDirection, setMsgDirection] = useState(
    () => localStorage.getItem(ALIGNMENT_STORAGE_KEY) ?? "left"
  );

  useEffect(() => {
    if (msgDirection) localStorage.setItem(ALIGNMENT_STORAGE_KEY, msgDirection);
  }, [msgDirection]);

  const getMessageAlignment = useCallback(
    (role) => {
      if (msgDirection !== "left_right") return "";

      // Respect the current document direction (LTR / RTL)
      const isRtl =
        typeof document !== "undefined" &&
        document?.documentElement?.getAttribute("dir") === "rtl";

      // In LTR we want the USER message on the right (reverse order).
      // In RTL we want the ASSISTANT message on the left (reverse order).
      const shouldReverse = isRtl ? role === "assistant" : role === "user";

      return shouldReverse ? "flex-row-reverse" : "";
    },
    [msgDirection]
  );

  return {
    msgDirection,
    setMsgDirection,
    getMessageAlignment,
  };
}
