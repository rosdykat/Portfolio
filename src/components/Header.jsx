import headerStyle from "@/components/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={headerStyle.headerWrapper}>
      <div className={headerStyle.header}>
        <Link href="/">Ross Fletcher</Link>
      </div>
    </div>
  );
}
