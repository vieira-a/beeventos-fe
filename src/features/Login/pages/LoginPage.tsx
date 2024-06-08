import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useClickOutsideListener from '@/hooks/useClickOutsideListener';
import { Link } from 'react-router-dom';

import { LoginForm } from '../components/LoginForm';
import useLoginDialogStore from '../store/login-dialog.store';

export function Login() {
  const { isLoginDialogOpen, closeLoginDialog } = useLoginDialogStore();
  const dialogRef = useClickOutsideListener(isLoginDialogOpen, closeLoginDialog);
  const loginForm = useClickOutsideListener(isLoginDialogOpen, closeLoginDialog);

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
            <div ref={loginForm}>
              <LoginForm/>
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