const ANALYTICS_URL = "/api/analytics/track.php";

export function trackVisit() {
  try {
    const formData = new FormData();
    formData.append("type", "visit");

    fetch(ANALYTICS_URL, {
      method: "POST",
      body: formData,
    }).catch(() => {});
  } catch (error) {
    console.error("Visit tracking failed:", error);
  }
}

export function trackDownload() {
  try {
    const formData = new FormData();
    formData.append("type", "download");

    fetch(ANALYTICS_URL, {
      method: "POST",
      body: formData,
    }).catch(() => {});
  } catch (error) {
    console.error("Download tracking failed:", error);
  }
}