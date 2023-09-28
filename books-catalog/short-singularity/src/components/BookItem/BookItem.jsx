import './BookItem.scss';

const BookItem = ({ image, name, author, description }) => (
    <div className="bookItem">
        <img
            className="bookItem__cover"
            src={image}
            alt={name + 'cover'}
        />
        <h2 className="bookItem__name">{name}</h2>
        <p className="bookItem__author">{author}</p>
        <span className="bookItem__description">{description}</span>
    </div>
);

export default BookItem;