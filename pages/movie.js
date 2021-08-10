import Form from "./../components/Form";
import Link from "next/link";

const movies = [
  { name: "Avengers", available: 5, quaantity: 0 },
  { name: "Wonder Woman", available: 15, quaantity: 0 }
];

export default function MoviePage() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form key={movie.name} movie={movie} />
      ))}
    </div>
  );
}
