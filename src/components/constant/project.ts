export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  tag: string
  link: string
}
export const projectColumns = [
  { label: "Title", accessor: "title" },
  { label: "Description", accessor: "description" },
  { label: "Technologies", accessor: (item:any) => item.technologies.join(", ") },
  { label: "Tag", accessor: "tag" },
  { label: "Link", accessor: "link" },
]