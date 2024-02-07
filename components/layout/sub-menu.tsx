import Link from "next/link";
import { MoveRight } from "lucide-react";

interface SubItem {
  id: string;
  name: string;
  url: string;
  margin?: boolean;
}
interface SubMenu {
  id: string;
  name: string;
  url: string;
  subItems: SubItem[];
}
interface SubCategory {
  id: string;
  name: string;
  url: string;
  subMenu: SubMenu[];
}
interface Category {
  id: string;
  name: string;
  url: string;
  subCategories: SubCategory[];
}
interface SubMenuProps {
  loadedCategory: Category;
}

export default function SubMenu({ loadedCategory }: SubMenuProps) {
  return (
    <nav className="px-14 pb-14">
      <div className="menu-wrapper">
        <div className="flex flex-row gap-x-28">
          {loadedCategory.subCategories.map((subCategory) => (
            <div
              key={subCategory.id}
              className="border-l-2 border-gray-light p-10"
            >
              {/* Golden menu title */}
              <Link
                className="group inline-block text-primary font-light text-2xl mb-10"
                href={subCategory.url}
              >
                <span className="link">
                  {subCategory.name}
                </span>
              </Link>
              <ul className="flex flex-row gap-20">
                {subCategory.subMenu.map((subMenu) => (
                  <li key={subMenu.id}>
                    {/* Bold sub menu title */}
                    <Link href={subMenu.url}>
                      {subMenu.name ? (
                        <div className="group inline-flex items-center text-gray-dark font-medium text-lg mb-3">
                          <span>{subMenu.name}</span>
                          <span className="transition-transform translate-x-2 group-hover:translate-x-4">
                            <MoveRight strokeWidth={1}  />
                          </span>
                        </div>
                      ) : (
                        <div className="mt-10"></div>
                      )}
                    </Link>
                    <ul className="leading-7">
                      {subMenu.subItems.map((subItem) => (
                        <li
                          key={subItem.id}
                          className={`text-gray-500 hover:text-black transition-all ${
                            subItem.margin ? "mt-3" : ""
                          }`}
                        >
                          <Link href={subItem.url}>
                            <span>{subItem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
