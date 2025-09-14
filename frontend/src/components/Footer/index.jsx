import React from "react";
import SettingsButton from "../SettingsButton";
import { isMobile } from "react-device-detect";
import { Tooltip } from "react-tooltip";
import { Keyboard, House, Gear, Globe, GithubLogo, Book, LinkSimple, ChatCircleText, Envelope, Info, Question, Plus } from "@phosphor-icons/react";
import { KEYBOARD_SHORTCUTS_HELP_EVENT } from "@/utils/keyboardShortcuts";

// Export a set of selectable footer icons for customization UIs
export const ICON_COMPONENTS = {
  Plus,
  Keyboard,
  House,
  Gear,
  Globe,
  GithubLogo,
  Book,
  LinkSimple,
  ChatCircleText,
  Envelope,
  Info,
  Question,
};

export default function Footer() {
  return (
    <div className="flex justify-center mb-2">
      <div className="flex gap-x-6">
        <div className="flex w-fit">
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent(KEYBOARD_SHORTCUTS_HELP_EVENT, {
                  detail: { show: true },
                })
              )
            }
            className="transition-all duration-300 p-2 rounded-full bg-theme-sidebar-footer-icon hover:bg-theme-sidebar-footer-icon-hover"
            aria-label="Keyboard Shortcuts"
            data-tooltip-id="footer-item"
            data-tooltip-content="Keyboard Shortcuts"
          >
            <Keyboard
              weight="fill"
              className="h-5 w-5"
              color="var(--theme-sidebar-footer-icon-fill)"
            />
          </button>
        </div>
        {!isMobile && <SettingsButton />}
      </div>
      <Tooltip
        id="footer-item"
        place="top"
        delayShow={300}
        className="tooltip !text-xs z-99"
      />
    </div>
  );
}
