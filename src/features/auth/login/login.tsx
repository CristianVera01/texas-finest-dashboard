import ViteLogo from '@/assets/vite.svg'
import { UserAuthForm } from './components/user-auth-form'

export default function Login() {
    return (
        <div className='flex flex-row w-full h-full px-5 md:px-0'>
            <div className='hidden md:flex bg-muted md:w-1/2'>
                <div className='inset-0 bg-primary' />

                <img
                    src={ViteLogo}
                    className='relative m-auto'
                    width={301}
                    height={60}
                    alt='Vite'
                />
            </div>
            <div className='w-full md:w-1/2'>
                <div className='flex flex-col items-center justify-center w-full h-full'>
                    <div className='flex flex-col space-y-2 text-left w-full max-w-[450px] mb-5'>
                        <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
                        <p className='text-sm text-muted-foreground'>
                            Enter your email and password below <br />
                            to log into your account
                        </p>
                    </div>
                    <UserAuthForm />
                </div>
            </div>
        </div>
    )
}
