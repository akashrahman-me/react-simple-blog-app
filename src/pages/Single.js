import Layout from '../components/Layout'
import 'react-multi-carousel/lib/styles.css'
import RelatedCategories from '../components/RelatedCategories'
import image from '../images/image.png'
import AuthorInfo from '../components/AuthorInfo'
import CommentForm from '../components/CommentForm'
import RelatedPostsSlide from '../components/RelatedPostsSlide'
import { Link } from 'react-router-dom'

const categories = [
	{ path: '/category', name: 'Care' },
	{ path: '/category', name: 'Featured' },
]

export default function Single() {
	return (
		<Layout>
			<main className="bg-dark text-white">
				<div className="container">
					<div className="mx-auto py-5" style={{ maxWidth: '750px' }}>
						<header>
							<RelatedCategories categories={categories} />
							<h1 className="fs-2 text-center">
								10 WAYS YOU CAN PRACTICE SELF-CARE ON A BUDGET
							</h1>
							<p className="fs-7 text-center">
								<span className="text-secondary"> written by </span>
								<Link to="/author">Akash Rahman</Link>
								<span>&nbsp;|&nbsp;</span>
								<span className="text-secondary">January 19, 2022</span>
							</p>
						</header>
						<section className="mt-4 text-color">
							<img src={image} alt="IMG THUMBNAIL" className="w-100" />
							<p className="blockquote-footer text-center text-color fs-5 mt-4 fst-italic fw-medium">
								Try out these budget-friendly ways to self-love.
							</p>
							<p>
								It’s no secret that “Self Care” has become a huge term to tackle the
								overwhelming days of anxiety, fear and mental well being in 2021, (not to
								forget the Pandemic chaos). Honestly, self-care is a sort of survival tool kit
								that enables us to step out in the world and face daily challenges.
							</p>
							<p>
								In the age of social media fancy, self-care routines or lavish vacations are
								synonymous with self-care. But uh, it all sounds perfect, if you have a large
								chunk of money right! Learning to practice self-care on a budget is a precious
								talent— be it a long walk or spending time with your furry friend, there are
								myriad other methods that help maintain balance and harmony in life.
							</p>
							<p>
								In the age of social media fancy, self-care routines or lavish vacations are
								synonymous with self-care. But uh, it all sounds perfect, if you have a large
								chunk of money right! Learning to practice self-care on a budget is a precious
								talent— be it a long walk or spending time with your furry friend, there are
								myriad other methods that help maintain balance and harmony in life.
							</p>
							<p>
								In the age of social media fancy, self-care routines or lavish vacations are
								synonymous with self-care. But uh, it all sounds perfect, if you have a large
								chunk of money right! Learning to practice self-care on a budget is a precious
								talent— be it a long walk or spending time with your furry friend, there are
								myriad other methods that help maintain balance and harmony in life.
							</p>
							<div className="tags-list mt-5">
								<a href="#">BUDGET FRIENDLY</a>
								<a href="#">SELF </a>
								<a href="#">CARESELF CARESELF </a>
								<a href="#">CARE IN PANDEMICSELF </a>
								<a href="#"> CARE ROUTINE </a>
							</div>
							<div className="mt-5">
								<hr />
								<p className="text-center fs-7">
									<span className="fa fa-comments-o" />
									&nbsp;
									<span>0&nbsp;commnets</span>
									<span className="mx-2">|</span>
									<span>
										0&nbsp;
										<span className="fa fa-heart-o cursor" />
									</span>
									<span className="mx-2">|</span>
									<a href="#" className="fa fa-facebook mx-1" />
									<a href="#" className="fa fa-twitter mx-1" />
									<a href="#" className="fa fa-youtube-play mx-1" />
								</p>
								<hr />
							</div>
							<div className="my-5">
								<AuthorInfo />
							</div>
							<div>
								<hr />
								<div className="d-flex">
									<div className="w-50 text-start">
										<span className="d-block">previous post</span>
										<a className="fs-7" href="#">
											Get Ultra Smooth Makeup Base With The New Frozen Beauty Blender
											Hack
										</a>
									</div>
									<div className="w-50 text-end">
										<span className="d-block">next post</span>
										<a className="fs-7" href="#">
											The Ultimate Guide To Picking The Right Mascara Wand
										</a>
									</div>
								</div>
								<hr />
							</div>
							<RelatedPostsSlide />
							<hr className="mt-5" />
							<div className="my-5">
								<CommentForm />
							</div>
						</section>
					</div>
				</div>
			</main>
		</Layout>
	)
}
