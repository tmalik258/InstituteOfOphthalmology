import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import Team from "../components/Team";
import Services from "../components/Services";
import Articles from "../components/Articles";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
	<div className="container flex flex-col gap-52 mx-auto">
		<Hero />
		<Facilities />
		<Team />
		<Services />
		<Articles />
		<Gallery />
	</div>
  )
}
