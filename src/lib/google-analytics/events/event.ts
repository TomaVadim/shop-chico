import { GoogleAnalyticsEventProps } from "@/shared/interfaces/google-analytics";

export const event = ({
  action,
  category,
  label,
  value,
}: GoogleAnalyticsEventProps) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
