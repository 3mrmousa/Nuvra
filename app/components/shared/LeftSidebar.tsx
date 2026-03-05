import Link from "next/link";

type LeftSidebarProps = {
  onClose: (open: boolean) => void;
};

function LeftSidebar({ onClose }: LeftSidebarProps) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 z-100 cursor-pointer"
        onClick={() => onClose(false)}
      />

      <div className="fixed left-0 top-0 w-64 h-screen bg-gray-200 dark:bg-gray-800 p-4 z-101">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Nuvra
          </h2>

          <button
            onClick={() => onClose(false)}
            className="text-gray-700 dark:text-gray-300 hover:opacity-70 cursor-pointer"
            type="button"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-2">
          {[
            { name: "Dashboard", link: "/" },
            { name: "About", link: "/about" },
          ].map((item) => (
            <li
              key={item.link}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md p-2 cursor-pointer"
              onClick={() => onClose(false)}
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default LeftSidebar;
