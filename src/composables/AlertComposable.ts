import { ref } from "vue";
import { nanoid } from "nanoid";
import type { AlertText, AlertType } from "@/types/AlertTypes";

interface Alert {
  id: string;
  text: AlertText;
  type: AlertType;
}

type Alerts = Alert[];

const alerts = ref<Alerts>([]);

export function useAlerts(): any {
  interface PushProps {
    title: string;
    type: AlertType;
    text: AlertText;
  }
  function pushAlert({ type, text = "" }: PushProps): void {
    alerts.value.push({ id: nanoid(), text, type });
  }
  function removeAlert(id: string): void {
    alerts.value = alerts.value.filter((el) => el.id !== id);
  }
  function clearAlerts() {
    alerts.value = [];
  }

  return { alerts, pushAlert, removeAlert, clearAlerts };
}
