import { Button } from "~/components/button/Button";
import Badge from "../../components/badge/Badge";

export default function Badges() {
  return (
    <div className="flex flex-col justify-center gap-2 m-2">
      <div className="flex gap-4">
        <Badge intent="error" size="small"></Badge>
        <Badge intent="error" size="medium"></Badge>
        <Badge intent="error" size="large"></Badge>
      </div>
      <div className="flex gap-4">
        <Badge intent="warning" size="small"></Badge>
        <Badge intent="warning" size="medium"></Badge>
        <Badge intent="warning" size="large"></Badge>
      </div>
      <div className="flex gap-4">
        <Badge intent="success" size="small"></Badge>
        <Badge intent="success" size="medium"></Badge>
        <Badge intent="success" size="large"></Badge>
      </div>
      <div className="flex gap-4">
        <Badge intent="brand" size="small"></Badge>
        <Badge intent="brand" size="medium"></Badge>
        <Badge intent="brand" size="large"></Badge>
      </div>
      <div className="flex mt-4 gap-4 items-center">
        <Button intent="primary" size="medium"></Button>
        <Button intent="primary" size="medium" disabled></Button>
        <Button intent="primary" size="large"></Button>
        <Button intent="primary" size="xl"></Button>
        <Button intent="primary" size="xxl"></Button>
      </div>
    </div>
  );
}
