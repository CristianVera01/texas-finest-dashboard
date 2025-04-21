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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'
import { format } from 'date-fns'
import { PhoneInput } from '@/components/phone-input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useGetAvailableHoursByDateLazy } from '../hooks/useGetAvailableHoursByDateLazy'
import { useCreateAppointmentMutation } from '../hooks/useCreateAppointmentMutation'

const formSchema = z.object({
  appointmentDate: z.string().min(1, { message: 'Date is required.' }),
  appointmentTime: z.string(),
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Email is invalid.' }),
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

  const { isPending, mutate: createAppointment } = useCreateAppointmentMutation();

  const isEdit = !!currentRow
  const form = useForm<AppointmentForm>({
    resolver: zodResolver(formSchema),
    defaultValues:{
        appointmentDate: '',
        appointmentTime: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        isEdit,
      },
  })

  const onSubmit = (values: AppointmentForm) => {

    createAppointment({
      appointmentDate: values.appointmentDate,
      appointmentTime: values.appointmentTime,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
    })

    form.reset()
    onOpenChange(false)
  }

  const { data: availableHours, isSuccess, loadDate } = useGetAvailableHoursByDateLazy();

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset()
        loadDate(null!);
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
              <FormField
                control={form.control}
                name='phoneNumber'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <PhoneInput
                        placeholder='Enter a phone number'
                        className='w-full'
                        countries={["US", "MX", "CA"]}
                        defaultCountry='US'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="appointmentDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Appointment</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground")}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (<span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode='single'
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => {

                            loadDate(format(date!, "yyyy-MM-dd"))

                            field.onChange(date!.toISOString())
                          }}
                          disabled={{
                            before: new Date(),
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {
                availableHours && isSuccess &&
                <FormField
                  control={form.control}
                  name='appointmentTime'
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Time of Appointment</FormLabel>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableHours!.map((hour) => (
                            <SelectItem key={hour} value={hour}>
                              {hour} HRS
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              }
            </form>
          </Form>
        </div>
        <DialogFooter>
          <Button type='submit' form='appointment-form' disabled={isPending}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
