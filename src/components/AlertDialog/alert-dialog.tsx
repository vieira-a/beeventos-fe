import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

type AlertProps = {
  message: string;
  open: boolean;
  onClose: () => void;
}

export function DialogAlert(props: AlertProps) {
  return (
    <AlertDialog open={props.open}>
      <AlertDialogContent >
        <AlertDialogHeader>
          <AlertDialogTitle>Atenção</AlertDialogTitle>
          <AlertDialogDescription>
            {props.message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 w-full text-xs font-semibold tracking-wider" onClick={props.onClose}>FECHAR</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
