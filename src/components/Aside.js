import InlineSearch from './InlineSearch'
import HeadingBar from './HeadingBar'
import PostLists from './PostLists'
import CommentLists from './CommentLists'
import SubscribeForm from './SubscribeForm'
import CategoriesLists from './CategoriesLists'

export default function Aside() {
	return (
		<div className="col-12 col-lg-4 pt-5">
			<InlineSearch />
			<HeadingBar title="RECENT POSTS" />
			<PostLists />
			<HeadingBar title="RECENT COMMENTS" mt={5} />
			<CommentLists />
			<HeadingBar title="SUBSCRIBE TO OUR SUGAR FAM" mt={5} />
			<SubscribeForm />
			<HeadingBar title="CATEGORIES" mt={5} />
			<CategoriesLists />
		</div>
	)
}
