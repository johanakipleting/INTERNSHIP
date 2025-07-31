import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
	{
		icon: MapPin,
		title: "Address",
		details: "Bugema, luweero District, Uganda",
	},
	{
		icon: Phone,
		title: "Phone",
		details: "+256 786 934813 / +256 775 034 301 ",
	},
	{
		icon: Mail,
		title: "Email",
		details: "bugemaadvprimary@gmail.com",
	},
	{
		icon: Clock,
		title: "Office Hours",
		details: "Mon - Fri: 8:00 AM - 5:00 PM",
	},
]

export function ContactSection() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl lg:text-4xl font-bold">Get In Touch</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Having questions about admissions or want to learn more about our
						school? We&apos;d love to hear from you.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold mb-6">
							Contact Information
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{contactInfo.map((info, index) => (
								<Card key={index}>
									<CardContent className="pt-6">
										<div className="flex items-start space-x-3">
											<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
												<info.icon className="h-5 w-5 text-primary" />
											</div>
											<div>
												<h4 className="font-semibold mb-1">{info.title}</h4>
												<p className="text-sm text-muted-foreground">
													{info.details}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
						{/* YouTube Video Embed with Download Button */}
						<div className="mt-8">
							<div className="w-full max-w-md aspect-video rounded-lg shadow-lg overflow-hidden mx-auto mb-4">
								<iframe
									width="100%"
									height="100%"
									src="https://www.youtube.com/embed/RIlvM4ylrMk"
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
							<div className="flex justify-center">
								<a
									href="https://en.savefrom.net/1-youtube-video-downloader-4/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button className="bg-blue-700 text-white hover:bg-blue-800">
										Download This Video
									</Button>
								</a>
							</div>
						</div>
					</div>

					<Card>
						<CardHeader>
							<CardTitle>Send us a Message</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="firstName">First Name</Label>
									<Input
										id="firstName"
										placeholder="Enter your first name"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										placeholder="Enter your last name"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="Enter your email"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="subject">Subject</Label>
								<Input
									id="subject"
									placeholder="Enter message subject"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									placeholder="Enter your message"
									rows={5}
								/>
							</div>
							<Button className="w-full">Send Message</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

export function HeroSection() {
	return (
		<section className="relative bg-blue-100 py-20">
			<div className="container flex flex-col md:flex-row items-center gap-8">
				<div className="flex-1">
					<h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
						Welcome to Bugema Adventist Primary School
					</h1>
					<p className="text-lg text-blue-800 mb-6">
						Providing holistic education and nurturing future leaders with
						Christian values.
					</p>
				</div>
				<div className="flex-1 flex justify-center">
					{/* YouTube Video Embed */}
					<div className="w-full max-w-md aspect-video rounded-lg shadow-lg overflow-hidden">
						<iframe
							width="100%"
							height="100%"
							src="https://www.youtube.com/embed/RIlvM4ylrMk"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</section>
	)
}
