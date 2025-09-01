import ProjectThumbnail from "@/components/ProjectThumbnail";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="flex-grow container mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectThumbnail
          key={project.slug}
          title={project.title}
          slug={project.slug}
          image={project.image}
        />
      ))}
    </main>
  );
}
