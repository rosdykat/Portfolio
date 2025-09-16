import ProjectThumbnail from "@/components/ProjectThumbnail";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="flex-grow container mx-auto p-6 main">
      <div className="thumbnailScroll">
        {projects.map((project) => (
          <div key={project.slug} className="thumbnailWrapper">
            <ProjectThumbnail
              title={project.title}
              slug={project.slug}
              image={project.images[0]}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
