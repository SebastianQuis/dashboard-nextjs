import Link from "next/link";

interface Props {
  title: string;
  subtitle?: string;
  label?: string;
  icon?: React.ReactNode;
  href: string;
}

export const SimpleWidget = ({ icon, title, href, label, subtitle }: Props) => {
  return (
    <div className="bg-white shadow-xl p-4 w-80 rounded-2xl border-1 border-gray-50 mx-2">
      <div className="flex flex-col">
        {title && (
          <div>
            <h2 className="font-bold text-gray-600 text-center">{title}</h2>
          </div>
        )}
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-4 ">
            {icon}
            <div id="temp" className="text-center">
              {label && <h4 className="text-4xl">{label}</h4>}
              {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-1">
          <Link
            href={href}
            className="text-indigo-600 text-xs font-medium pt-2"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};
