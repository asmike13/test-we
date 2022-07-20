import BookInfos from "./BookInfos"
import NavBar from "../common/NavBar"
import { IBook } from "src/types/book"
import CharacterList from "../characters/containers/CharacterListContainer"
import Loader from "../common/Loader"

interface IBookDetailProps {
	status: "idle" | "fulfilled" | "pending" | "rejected"
	currentBook?: IBook
	title: string
}

export const BookDetail = ({ status, currentBook, title }: IBookDetailProps) => (
	<>
		{status === 'pending' && <Loader />}
		{status === 'rejected' && <div className="section-title">Book not found</div>}
		{status === 'fulfilled' && currentBook &&
			<>
				<NavBar title={title} />
				<span className="section-title">Infos :</span>
				<BookInfos book={currentBook} />
				<CharacterList />
			</>
		}
	</>
)

export default BookDetail;
