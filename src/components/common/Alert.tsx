import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
type Props = {
  open: boolean;
  title: string;
  description: ReactNode;
  onClickCancel: () => void;
  onClickConfirm: () => void;
};
export function Alert({
  open,
  title,
  description,
  onClickCancel,
  onClickConfirm,
}: Props) {
  const t = useTranslations('Alert');

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClickCancel}>
            {t('cancel')}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onClickConfirm} variant="destructive">
            {t('confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
