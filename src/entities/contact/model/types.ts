import type { IconName } from '@/shared/ui/Icon';

export type ContactId = 'email' | 'phone' | 'telegram';

export interface Contact {
  id: ContactId;
  label: string;
  value: string;
  href: string;
  icon: IconName;
  ariaLabel: string;
  external: boolean;
}