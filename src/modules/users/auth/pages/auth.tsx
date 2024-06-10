import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useClickOutsideListener from '@/shared/hooks/useClickOutsideListener';
import { Link } from 'react-router-dom';

import { AuthForm } from '../components/auth-form';
import useLoginStore from '../store/auth.store';

export function Authentication() {
  const { isLoginDialogOpen, closeLoginDialog } = useLoginStore();
  const dialogRef = useClickOutsideListener(isLoginDialogOpen, closeLoginDialog);
  const authForm = useClickOutsideListener(isLoginDialogOpen, closeLoginDialog);

  return (
    <div>
      <Dialog open={isLoginDialogOpen} onOpenChange={closeLoginDialog}>
        <DialogContent ref={dialogRef} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              Faça login para participar de eventos.
            </DialogDescription>
          </DialogHeader>
            <div ref={authForm}>
              <AuthForm/>
            </div>
          <DialogFooter>
            <div>
              <p className='text-sm text-center'>
                Ainda não tem conta? Registre-se&nbsp;
                <Link className='text-yellow-600 underline decoration-bouble' to={"/register"} onClick={closeLoginDialog}>
                  aqui
                </Link>
              </p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}