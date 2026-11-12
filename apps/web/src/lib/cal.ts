/**
 * Cal.com popup helpers.
 * Uses @calcom/embed-react under the hood; the import is dynamic so it
 * doesn't bloat the initial bundle (loaded only when the user clicks).
 */

const CAL_LINK = "rifatbroh/30min";

let calLoaderPromise: Promise<typeof import("@calcom/embed-react")> | null = null;

async function loadCal() {
  if (!calLoaderPromise) {
    calLoaderPromise = import("@calcom/embed-react");
  }
  return calLoaderPromise;
}

export async function openCalPopup(link: string = CAL_LINK) {
  const { getCalApi } = await loadCal();
  const cal = await getCalApi({ namespace: "30min" });

  // Theme + brand color (accent green). Both light + dark keys required by type.
  cal("ui", {
    theme: "light",
    cssVarsPerTheme: {
      light: { "cal-brand": "#047857" },
      dark: { "cal-brand": "#047857" },
    },
  });

  // Open a modal popup for the given event link.
  cal("modal", { calLink: link });
}

export function scheduleMeeting() {
  openCalPopup().catch((err) => {
    console.error("Failed to open Cal.com popup:", err);
  });
}
