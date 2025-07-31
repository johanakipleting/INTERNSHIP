import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Heart } from "lucide-react"
import Link from "next/link"

const features = [
	{
		icon: BookOpen,
		title: "Academic Excellence",
		description:
			"A robust syllabus tailored to nurture reasoning abilities and intellectual growth.",
	},
	{
		icon: Users,
		title: "Skilled Educators",
		description:
			"Passionate and certified professionals devoted to unlocking every learner’s potential..",
	},
	{
		icon: Award,
		title: "Holistic Development",
		description:
			"Nurturing both moral character and academic excellence in every learner.",
	},
	{
		icon: Heart,
		title: "Nurturing Atmosphere ",
		description:
			"A secure and encouraging space where every child is respected and cherished.",
	},
]
export function AboutSection() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl lg:text-4xl font-bold">
						Why Choose Bugema Adventist Primary?
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						We provide a holistic education that combines academic excellence with
						Christian values, preparing students Affodable fees and we deliver the
						best performance.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<Card key={index} className="text-center">
							<CardContent className="pt-6">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
									<feature.icon className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-semibold mb-2">{feature.title}</h3>
								<p className="text-sm text-muted-foreground">
									{feature.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Add Read More button here */}
				<div className="text-center mt-10">
					<Link href="/about">
						<button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
							Read More
						</button>
					</Link>
				</div>
			</div>
		</section>
	)
}
