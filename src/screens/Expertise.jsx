import PageLayout from '../layouts/PageLayout';
import hospitalServices from '../services';

export default function Expertise() {
  return (
	<>
		<PageLayout initialData={hospitalServices} heading='Our Services and Facilities' searchHeading='Services' text='Highly qualified professionals are here to provide expert care for you.' />
	</>
  )
}
