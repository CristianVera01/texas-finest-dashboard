import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useAuthStore } from '@/stores/authStore'
import { PhoneInput } from '@/components/phone-input'
import { useUpdateProfileMutation } from '../hooks/useUpdateProfileMutation'

const profileFormSchema = z.object({
  firstName: z.
    string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(30, { message: 'First name must not be longer than 30 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(30, { message: 'Last name must not be longer than 30 characters.' }),
  phoneNumber: z
    .string()
    .min(2, { message: 'Phone number must be at least 2 characters.' })
    .max(15, { message: 'Phone number must not be longer than 30 characters.' })
    .optional(),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email()
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>


export default function ProfileForm() {

  const { updateProfileMutation } = useUpdateProfileMutation();
  const { user } = useAuthStore();

  const defaultValues: Partial<ProfileFormValues> = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
  }


  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })


  function onSubmit(data: ProfileFormValues) {
    updateProfileMutation.mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      userId: user!.id,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='firstName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your first name...' {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a pseudonym.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='lastName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your last name...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email...' {...field} disabled />
              </FormControl>
              <FormDescription>
                This email will be received all notifications about your account and appointments.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phoneNumber'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInput placeholder='Enter your phone number...' {...field} disabled />
              </FormControl>
              <FormDescription>
                This phone number will be used for all communications with you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='bg-primary'>Update profile</Button>
      </form>
    </Form>
  )
}
