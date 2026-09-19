"use client";

import { useState, useEffect } from "react";
import { whatsappConfig } from "@/lib/data";

export interface WhatsAppButtonProps {
  /** Master toggle: set to false to completely hide/disable */
  enabled?: boolean;
  /** Set to true to hide on mobile screens (< 768px) */
  hideOnMobile?: boolean;
  /** Set to true to hide on desktop screens (>= 768px) */
  hideOnDesktop?: boolean;
  /** WhatsApp phone number with country code, e.g. "918383850942" */
  phoneNumber?: string;
  /** Default pre-filled chat message */
  defaultMessage?: string;
  /** Allow visitor to dismiss/close the floating button */
  allowDismiss?: boolean;
  /** Tooltip text shown on hover */
  tooltipText?: string;
}

export default function WhatsAppButton(props: WhatsAppButtonProps) {
  const enabled = props.enabled ?? whatsappConfig.enabled;
  const hideOnMobile = props.hideOnMobile ?? whatsappConfig.hideOnMobile;
  const hideOnDesktop = props.hideOnDesktop ?? whatsappConfig.hideOnDesktop;
  const phoneNumber = (props.phoneNumber ?? whatsappConfig.phoneNumber).replace(/[^0-9]/g, "");
  const defaultMessage = props.defaultMessage ?? whatsappConfig.defaultMessage;
  const allowDismiss = props.allowDismiss ?? whatsappConfig.allowDismiss;
  const tooltipText = props.tooltipText ?? whatsappConfig.tooltipText;

  const [isDismissed, setIsDismissed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("erato_wa_dismissed") === "true") {
        setIsDismissed(true);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDismissed(true);
    try {
      sessionStorage.setItem("erato_wa_dismissed", "true");
    } catch {
      // Ignore storage errors
    }
  };

  // If disabled or hidden on both mobile and desktop, or user dismissed it
  if (!enabled || (hideOnMobile && hideOnDesktop) || isDismissed) {
    return null;
  }

  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}${defaultMessage ? `?text=${encodedMessage}` : ""}`;

  return (
    <aside
      aria-label="WhatsApp Contact"
      className={`whatsapp-floating-container ${hideOnMobile ? "wa-hide-mobile" : ""} ${
        hideOnDesktop ? "wa-hide-desktop" : ""
      }`}
    >
      {/* Tooltip on desktop hover */}
      <div
        className={`whatsapp-tooltip ${isHovered ? "whatsapp-tooltip-visible" : ""}`}
        aria-hidden={!isHovered}
      >
        <span>{tooltipText}</span>
        <div className="whatsapp-tooltip-arrow" />
      </div>

      {/* Dismiss / Close Option */}
      {allowDismiss && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Hide WhatsApp button"
          className="whatsapp-dismiss-btn"
          title="Hide button"
        >
          <svg
            width="9"
            height="9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}

      {/* Single Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltipText || "Chat on WhatsApp"}
        className="whatsapp-action-btn"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Embedded Styles */}
      <style>{`
        .whatsapp-floating-container {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 90;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        /* Mobile hiding rule */
        .wa-hide-mobile {
          display: flex;
        }
        @media (max-width: 767px) {
          .wa-hide-mobile {
            display: none !important;
          }
        }

        /* Desktop hiding rule */
        .wa-hide-desktop {
          display: none;
        }
        @media (max-width: 767px) {
          .wa-hide-desktop {
            display: flex !important;
          }
        }

        .whatsapp-action-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #25D366;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45), 0 2px 8px rgba(0, 0, 0, 0.2);
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
          text-decoration: none;
          position: relative;
        }

        .whatsapp-action-btn:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.6), 0 3px 10px rgba(0, 0, 0, 0.25);
        }

        .whatsapp-action-btn:active {
          transform: scale(0.95);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: rgba(18, 18, 17, 0.94);
          backdrop-filter: blur(8px);
          color: #f3f0e9;
          font-family: var(--font-body, "Inter", sans-serif);
          font-size: 0.8rem;
          letter-spacing: 0.02em;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid rgba(185, 151, 91, 0.3);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .whatsapp-tooltip-visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .whatsapp-tooltip-arrow {
          position: absolute;
          right: -5px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background: rgba(18, 18, 17, 0.94);
          border-top: 1px solid rgba(185, 151, 91, 0.3);
          border-right: 1px solid rgba(185, 151, 91, 0.3);
        }

        .whatsapp-dismiss-btn {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #181817;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0.75;
          transition: opacity 0.2s, background-color 0.2s, transform 0.2s;
          z-index: 2;
        }

        .whatsapp-dismiss-btn:hover {
          opacity: 1;
          background: #000000;
          color: #ffffff;
          transform: scale(1.15);
        }

        @media (max-width: 767px) {
          .whatsapp-floating-container {
            bottom: 20px;
            right: 20px;
          }
          .whatsapp-action-btn {
            width: 48px;
            height: 48px;
          }
          .whatsapp-action-btn svg {
            width: 24px;
            height: 24px;
          }
          .whatsapp-tooltip {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
