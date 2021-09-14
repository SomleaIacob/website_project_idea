class BioModel {
  id;
  name;
  birthday;
  description;
  movies = [];
  constructor({ id, name, birthday, description, movies }) {
    this.id = id;
    this.name = name;
    this.birthday = new Date(birthday);
    this.description = description;
    this.movies = movies;
  }
}

export default BioModel;
