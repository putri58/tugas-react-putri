import Button from "../components/basic/Button";
import Badge from "../components/basic/Badge";
import Avatar from "../components/basic/Avatar";

export default function Components() {
  return (
    <div className="space-y-6">

      <Button type="success">
        Save
      </Button>

      <Badge type="warning">
        Pending
      </Badge>

      <Avatar name="Putree" />

    </div>
  );
}