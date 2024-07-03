import PageLayout from '../layouts/PageLayout';
import hospitalServices from '../services';
import comingSoonServices from '../comingSoonServices';

export default function Expertise() {
  return (
	<>
		<PageLayout initialData={hospitalServices} comingSoon={true} comingSoonData={comingSoonServices} heading='Our Services and Facilities' searchHeading='Services' text='Highly qualified professionals are here to provide expert care for you.' />
	</>
  )
}
