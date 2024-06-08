import aboutUsImg from "../assets/about-us.jpeg";
import directorMsgImg from "../assets/director-msg.jpeg";
import vissionMissionImg from "../assets/vission-mission.jpeg";
import AboutCard from "../layouts/AboutCard";

export default function About() {
	return (
		<>
			<AboutCard
				img={aboutUsImg}
				heading="About Us"
				text="The establishment of an Institute of Ophthalmology in
					Mombasa, Kenya, in association with the University of
					Lahore, offers a ground-breaking chance to tackle the urgent
					problem of preventable blindness and visual impairment in
					the area. This program is intended to improve the quality of
					life for those who are impacted by visual health problems in
					addition to offering complete eye care services. The
					Institute strives to efficiently accomplish its goals by
					utilizing a strategic strategy that includes infrastructure
					development, high-volume quality disease control, sufficient
					human resources, and active community involvement. The
					Institute maximizes its influence on lowering the incidence
					of preventable blindness by concentrating on the most common
					eye disorders in the area, including cataract procedures and
					refractive problems."
			/>
			<AboutCard
				img={directorMsgImg}
				heading="Director's Message"
				text="Welcome to the Institute of Ophthalmology Mombasa!
					As the Director, I am proud to lead an institution dedicated to providing top-notch eye care, innovative research, and comprehensive education. Our mission is to improve eye health in our community and beyond with a team of skilled professionals and advanced technology.
					We offer a range of services from routine eye exams to complex surgeries, ensuring personalized and compassionate care. Our educational programs and research initiatives aim to advance the field of ophthalmology and improve patient outcomes.
					Explore our website to learn more about our services, educational opportunities, and research projects. Thank you for choosing the Institute of Ophthalmology Mombasa for your eye care needs.
					Warm regards, <br />
					[Your Name]<br />Director, Institute of Ophthalmology Mombasa"
				classN={"flex-row-reverse"}
			/>
			<AboutCard
				img={vissionMissionImg}
				heading="Vision & Mission"
				text="Our vision is to be a leading center of excellence in eye care, research, and education, dedicated to improving vision health and enhancing the quality of life for individuals in our
				community and beyond. Our mission is to provide high-quality, compassionate, and personalized eye care services using the latest advancements in ophthalmology, conduct ground-breaking research to find new solutions for eye diseases, and offer robust training programs for aspiring ophthalmologists and allied health professionals. We are committed to promoting eye health awareness, supporting underserved populations through outreach programs, and contributing to the global advancement of ophthalmology through collaboration, research, and the dissemination of knowledge."
			/>
		</>
	);
}
