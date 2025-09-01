import headerStyle from "@/components/header.module.css";

export default function Header() {
  return (
    <div className={headerStyle.headerWrapper}>
      <div className={headerStyle.header}>
        <h1>Ross Fletcher</h1>
      </div>
    </div>
  );
}
