class Movie {
    id;
    title;
    description;
    rating;
    year;
    cast = [];
    genres = [];
    directors = [];
    writers = [];

    constructor({id, title, description, rating, year, cast, genres, directors, writers}){
        this.id = id;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.year = year;
        this.cast = cast;
        this.genres = genres;
        this.directors = directors;
        this.writers = writers;
    }
}

export default Movie;