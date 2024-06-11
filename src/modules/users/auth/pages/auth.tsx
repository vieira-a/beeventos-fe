import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useClickOutsideListener from '@/shared/hooks/useClickOutsideListener';

import useSignupStore from '../../signup/store/signup.store';
import { AuthForm } from '../components/auth-form';
import useLoginStore from '../store/auth.store';

export function Authentication() {
  const { isLoginDialogOpen, closeLoginDialog } = useLoginStore();
  const { openSignupDialog } = useSignupStore()
  const dialogRef = useClickOutsideListener(isLoginDialogOpen, closeLoginDialog);
  const authForm = useClickOutsideListener(isLoginDialogOpen, closeLoginDialog);

  const handleRegisterDialog = () => {
    closeLoginDialog()
    openSignupDialog()
  }

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
                 <span className='text-yellow-600 underline decoration-bouble' onClick={handleRegisterDialog}>
                  aqui
                </span>
              </p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}