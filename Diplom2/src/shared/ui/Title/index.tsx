import "./index.css";

export default function TitleSection({ children }: { children: string }) {
  return <h2 className="title-section">{children}</h2>;
}
