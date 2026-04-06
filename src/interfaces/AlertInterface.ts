import type { AlertText, AlertType } from '@/types/AlertTypes';

export interface AlertInterface {
  id: string;
  text: AlertText;
  type: AlertType;
}
