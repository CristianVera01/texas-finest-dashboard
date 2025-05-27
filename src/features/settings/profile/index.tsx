import { Separator } from '@/components/ui/separator'
import ContentSection from '../components/content-section'
import ProfileForm from './profile-form'
import { UpdatePasswordForm } from './update-password-form'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <>
        <ProfileForm />
        <Separator className='my-4 lg:my-6' />
        <UpdatePasswordForm />
      </>
    </ContentSection>
  )
}
