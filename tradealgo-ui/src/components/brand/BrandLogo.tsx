import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  showText?: boolean;
  iconOnlyOnMobile?: boolean;
  size?: number;
  textClassName?: string;
};

export default function BrandLogo({
  href = "/",
  showText = true,
  iconOnlyOnMobile = true,
  size = 40,
  textClassName = "text-sm font-semibold tracking-wide text-white",
}: BrandLogoProps) {
  return (
    <Link href={href} className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="TradeAlgoSuite"
        width={size}
        height={size}
        priority
        className="object-contain"
        style={{ height: size, width: "auto" }}
      />

      {showText && (
        <span className={
          iconOnlyOnMobile ? `hidden sm:block ${textClassName}` : textClassName
        }>
          TradeAlgoSuite
        </span>
      )}
    </Link>
  );
}
