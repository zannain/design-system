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
        <h1 className="bg-blue">Hello world!</h1>
        <h1 className="bg-blue-dark">Hello world!</h1>
        <h1 className="bg-blue-light">Hello world!</h1>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
