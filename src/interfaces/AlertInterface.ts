import type { AlertText, AlertType } from "@/types/AlertTypes";

interface AlertInterface {
  id: string;
  text: AlertText;
  type: AlertType;
}

export default AlertInterface;
