import type { Contacts } from "~/common/directory";
import { NavLink } from "@remix-run/react";
import { classNames } from "~/utils/classnames";

type ContactNavProps = {
  data: Contacts;
  search?: string;
};

export default function ContactNav({ data, search }: ContactNavProps) {
  const qs = search ? `?search=${search}` : "";
  return (
    <nav className="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
      {Object.keys(data).map((letter) => (
        <div key={letter} className="relative">
          <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
            <h3>{letter}</h3>
          </div>
          <ul className="relative z-0 divide-y divide-gray-200">
            {data[letter].map((person) => (
              <li key={person.id}>
                <NavLink
                  to={`/workflow/directory/${person.id}${qs}`}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? "ring-2 ring-inset ring-pink-500" : "",
                      "block focus:outline-none hover:bg-gray-50"
                    )
                  }
                >
                  <div className="relative px-6 py-5 flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
