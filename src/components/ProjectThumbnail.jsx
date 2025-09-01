import Link from "next/link";

export default function ProjectThumbnail({ title, slug, image }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="relative block h-48 rounded-xl overflow-hidden group"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
      </div>
    </Link>
  );
}
