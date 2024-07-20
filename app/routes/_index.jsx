import { Link } from "@remix-run/react";
export default function Index() {
  return (
    <div className="container mx-auto px-4">
      <Link to="/badges">Badges</Link>
    </div>
  );
}
