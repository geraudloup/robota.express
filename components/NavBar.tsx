import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav>
      <div className="-mb-px flex justify-center">
        <Link href="/">
          <a className="no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8">
            {t("Home")}
          </a>
        </Link>
        <Link href="/jobs">
          <a className="no-underline border-b-2 uppercase tracking-wide font-bold text-xs py-3 mr-8">
            {t("Jobs")}
          </a>
        </Link>
      </div>
    </nav>
  );
}