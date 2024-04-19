import { isEmpty } from "lodash-es";
import { initNeoletterFormWidgets as realInitNeoletterFormWidgets } from "./config/scrivitoConfig";
import { CaptchaOptions } from "../types/types";

export const initNeoletterFormWidgets = (instanceId?: string, captchaOptions?: CaptchaOptions): void => {
  realInitNeoletterFormWidgets(instanceId, captchaOptions);
  loadEditingConfigs();
};


function loadEditingConfigs(): void {
  if (isEmpty(import.meta)) {
    const widgetImportsContext = require.context(
      "./Widgets",
      true,
      /WidgetEditingConfig\.tsx?$/
    );
    widgetImportsContext.keys().forEach(widgetImportsContext);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (import.meta as any).glob(
      [
        "./Widgets/**/*WidgetEditingConfig.ts"
      ],
      {
        eager: true
      }
    );
  }
}
