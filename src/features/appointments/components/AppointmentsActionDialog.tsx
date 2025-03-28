import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Appointment } from '../interfaces/Appointment'

const formSchema = z.object({
  appointmentDate: z.string(),
  appointmentTime: z.string(),
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Email is invalid.' }),
  countryCode: z.string().min(1, { message: 'Country code is required.' }),
  isEdit: z.boolean(),
})

type AppointmentForm = z.infer<typeof formSchema>

interface Props {
  currentRow?: Appointment
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const AppointmentsActionDialog = ({
  currentRow,
  open,
  onOpenChange,
}: Props) => {
  const isEdit = !!currentRow
  const form = useForm<AppointmentForm>({
    resolver: zodResolver(formSchema),
    defaultValues: isEdit
      ? {
          ...currentRow,
          isEdit,
        }
      : {
          appointmentDate: '',
          appointmentTime: '',
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '',
          phoneNumber: '',
          isEdit,
        },
  })

  const onSubmit = (values: AppointmentForm) => {
    form.reset()
    console.log(values)

    if (isEdit) {
      // update
    } else {
      // create
    }

    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset()
        onOpenChange(state)
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEdit ? 'Edit Appointment' : 'Add New Appointment'}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? 'Update the appointment here. '
              : 'Create new appointment here. '}
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='-mr-4 h-[26.25rem] w-full overflow-y-auto py-1 pr-4'>
          <Form {...form}>
            <form
              id='appointment-form'
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-4 p-0.5'
            >
              <FormField
                control={form.control}
                name='firstName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder='John' {...field} />
                    </FormControl>
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
                      <Input placeholder='Doe' {...field} />
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
                      <Input placeholder='john.doe@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div
                className='flex flex-row gap-2 w-full'
              >
                <FormField
                  control={form.control}
                  name='countryCode'
                  render={({ field }) => (
                    <FormItem className='w-full max-w-[120px]'>
                      <FormLabel>Country Code</FormLabel>
                      <FormControl>
                        <Input placeholder='+1' {...field} className='w-full'/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='phoneNumber'
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder='1234567890' {...field} className='w-full'/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button type='submit' form='appointment-form'>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
