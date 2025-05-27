
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const updatePasswordFormSchema = z.object({
    currentPassword: z.string().transform((pwd) => pwd.trim()),
    newPassword: z.string().transform((pwd) => pwd.trim()),
    confirmPassword: z.string().transform((pwd) => pwd.trim()),
}).superRefine(({ currentPassword, newPassword, confirmPassword }, ctx) => {
    if (currentPassword === '') {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Current password is required.',
            path: ['currentPassword'],
        })
    }

    if (newPassword === '') {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'New password is required.',
            path: ['newPassword'],
        })
    }

    if (newPassword !== confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'New passwords do not match.',
            path: ['confirmPassword'],
        })
    }
})

type UpdatePasswordFormValues = z.infer<typeof updatePasswordFormSchema>

export const UpdatePasswordForm = () => {

    const form = useForm<UpdatePasswordFormValues>({
        resolver: zodResolver(updatePasswordFormSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
    })

    function onSubmit(data: UpdatePasswordFormValues) {
        console.log(data)
    }

    return (
        <div className="mt-4">
            <h4 className="text-lg font-medium">Update Password</h4>
            <p className="text-muted-foreground text-sm">
                You can change your password from here.
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
                    <FormField
                        control={form.control}
                        name="currentPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Current Password</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="********" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your current password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <PasswordInput placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-primary">
                        Update password
                    </Button>
                </form>
            </Form>
        </div>
    )
}
