import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav>
      <div>
        <Link href="/">
          <a>
            {t("Home")}
          </a>
        </Link>
        <Link href="/jobs">
          <a>
            {t("Jobs")}
          </a>
        </Link>
        <Link href="/about">
          <a>
            {t("About")}
          </a>
        </Link>
      </div>
    </nav>
  );
}