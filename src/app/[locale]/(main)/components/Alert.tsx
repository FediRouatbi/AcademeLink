import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ReactNode } from "react";
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
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClickCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClickConfirm} variant="destructive">
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
