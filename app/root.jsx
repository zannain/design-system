import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import styles from "./tailwind.css?url";

export const links = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body className="font-notoSans">
        <div>
          <Outlet />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
