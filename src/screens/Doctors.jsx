import PageLayout from '../layouts/PageLayout';
import teamMembers from '../team';

export default function Doctors() {
  return (
	<>
		<PageLayout initialData={teamMembers} heading='Meet our Doctors' searchHeading='Doctors' text='Well  qualified doctors are ready to serve you' />
	</>
  )
}
