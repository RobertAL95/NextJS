import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <p>Este es un sitio para comprar boletos de tus peliculas favoritas</p>
      <Link href="movie">
        <a>Ir a comprar pelis</a>
      </Link>
    </div>
  );
}
