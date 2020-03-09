import { useEffect } from "react";
import { Updates } from "expo";
import { BehaviorSubject } from "rxjs";

export const updater$ = new BehaviorSubject();

const Messages = {
  dev: "Devlopment",
  check: "Checking",
  download: "Download",
  latest: "Latest",
  error: "Error"
};

/**
 * OTA Updates
 */
export default function useUpdater() {
  const send = type => {
    updater$.next({ type, message: Messages[type] });
  };

  useEffect(() => {
    (async function() {
      if (process.env.NODE_ENV === "development") {
        return send("dev");
      }

      send("check");
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          send("download");
          await Updates.fetchUpdateAsync();
          Updates.reloadFromCache();
        } else {
          send("latest");
        }
      } catch (e) {
        send("error");
      }
    })();
  }, []);
}
