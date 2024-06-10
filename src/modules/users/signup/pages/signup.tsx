import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignupForm } from '../components';
import useShowSignupToast from '../hooks/useShowSignupToast';
import useSignupStore from '../store/signup.store';

export function SignUp() {
  const navigate = useNavigate();
  const { isSignupDialogOpen, closeSignupDialog } = useSignupStore();
  useShowSignupToast()

  useEffect(() => {
    navigate('/')
  }, [closeSignupDialog])

  return (
    <div>
      <Dialog open={isSignupDialogOpen} onOpenChange={closeSignupDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Inscreva-se</DialogTitle>
            <DialogDescription>
              Crie uma conta para participar de eventos.
            </DialogDescription>
          </DialogHeader>
            <div>
              <SignupForm/>
            </div>
          <DialogFooter>
            <p className='text-xs'>
              Ao criar uma conta, você concorda com as Condições de Uso da Beeventos.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}