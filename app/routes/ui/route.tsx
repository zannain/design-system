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
        <Button intent="primary" size="large"></Button>
        <Button intent="primary" size="xl"></Button>
        <Button intent="primary" size="xxl"></Button>
      </div>
      <div className="flex mt-4 gap-4 items-center">
        <Button intent="secondary" size="medium"></Button>
        <Button intent="secondary" size="large"></Button>
        <Button intent="secondary" size="xl"></Button>
        <Button intent="secondary" size="xxl"></Button>
      </div>
      <div className="flex mt-4 gap-4 items-center">
        <Button intent="tertiary" size="medium"></Button>
        <Button intent="tertiary" size="large"></Button>
        <Button intent="tertiary" size="xl"></Button>
        <Button intent="tertiary" size="xxl"></Button>
      </div>
      <div className="flex mt-4 gap-4 items-center">
        <Button intent="link" size="medium"></Button>
        <Button intent="link" size="large"></Button>
        <Button intent="link" size="xl"></Button>
        <Button intent="link" size="xxl"></Button>
      </div>
      <div className="flex mt-4 gap-4 items-center">
        <Button intent="destructive" size="medium"></Button>
        <Button intent="destructive" size="large"></Button>
        <Button intent="destructive" size="xl"></Button>
        <Button intent="destructive" size="xxl"></Button>
      </div>
    </div>
  );
}
