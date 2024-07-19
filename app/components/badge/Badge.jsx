import styles from "./Badge.css";
export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Badge() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex text-xs px-4 py-2 border-2 rounded-full w-fit text-neutral border-neutral-light bg-grey-light">
        Label
      </div>
      <div className="flex text-xs px-4 py-2 border-2 rounded-full w-fit text-red-dark border-neutral-light bg-red-light">
        Label
      </div>
      <div className="flex text-xs px-4 py-2 border-2 rounded-full w-fit text-yellow-dark border-neutral-light bg-yellow-light">
        Label
      </div>
      <div className="flex text-xs px-4 py-2 border-2 rounded-full w-fit text-green-dark border-neutral-light bg-green-light">
        Label
      </div>
      <div className="flex text-xs px-4 py-2 border-2 rounded-full w-fit text-blue-dark border-neutral-light bg-blue-light">
        Label
      </div>
    </div>
  );
}
